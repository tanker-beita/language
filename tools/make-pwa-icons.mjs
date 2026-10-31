// Draws the PWA icons (rounded green tile with the letters LS over RW) without any image library.
import { deflateSync } from "node:zlib";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OUT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "icons");
const GREEN = [63, 127, 88];
const PAPER = [244, 243, 221];

function crc32(buffer) {
  let crc = ~0;
  for (const byte of buffer) {
    crc ^= byte;
    for (let i = 0; i < 8; i++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
  }
  return ~crc >>> 0;
}

function chunk(type, data) {
  const head = Buffer.alloc(8);
  head.writeUInt32BE(data.length, 0);
  head.write(type, 4, "ascii");
  const tail = Buffer.alloc(4);
  tail.writeUInt32BE(crc32(Buffer.concat([head.subarray(4), data])), 0);
  return Buffer.concat([head, data, tail]);
}

function encodePng(size, pixel) {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    for (let x = 0; x < size; x++) {
      const [r, g, b, a] = pixel(x / size, y / size);
      raw.set([r, g, b, a], y * (size * 4 + 1) + 1 + x * 4);
    }
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header.set([8, 6, 0, 0, 0], 8);
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

// Letters are stroked polylines in a 0..1 cell; each entry is one continuous stroke.
const GLYPHS = {
  L: [[[0.18, 0], [0.18, 1], [0.86, 1]]],
  S: [[[0.86, 0.14], [0.5, 0], [0.16, 0.16], [0.2, 0.4], [0.5, 0.5], [0.84, 0.62], [0.8, 0.86], [0.5, 1], [0.14, 0.86]]],
  R: [[[0.18, 1], [0.18, 0], [0.64, 0], [0.84, 0.14], [0.84, 0.38], [0.64, 0.52], [0.18, 0.52]], [[0.52, 0.52], [0.88, 1]]],
  W: [[[0.04, 0], [0.27, 1], [0.5, 0.34], [0.73, 1], [0.96, 0]]]
};
// Two rows: LS over RW. Cells are given as [letter, left, top] in glyph-space units.
const CELLS = [["L", 0.17, 0.15], ["S", 0.53, 0.15], ["R", 0.17, 0.57], ["W", 0.53, 0.57]];
const CELL_W = 0.3;
const CELL_H = 0.28;
const STROKE = 0.07;

function segmentDistance(px, py, ax, ay, bx, by) {
  const dx = bx - ax;
  const dy = by - ay;
  const t = Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function onGlyph(gu, gv) {
  for (const [letter, left, top] of CELLS) {
    if (gu < left - STROKE || gu > left + CELL_W + STROKE || gv < top - STROKE || gv > top + CELL_H + STROKE) continue;
    for (const stroke of GLYPHS[letter]) {
      for (let i = 1; i < stroke.length; i++) {
        const [ax, ay] = stroke[i - 1];
        const [bx, by] = stroke[i];
        if (segmentDistance(gu, gv, left + ax * CELL_W, top + ay * CELL_H, left + bx * CELL_W, top + by * CELL_H) <= STROKE / 2) return true;
      }
    }
  }
  return false;
}

const SAMPLES = 3;

// `safe` shrinks the glyphs into the central 62% so maskable icons survive circular cropping.
function icon(size, { rounded, safe }) {
  const k = safe ? 0.62 : 0.8;
  return encodePng(size, (u, v) => {
    if (rounded) {
      const r = 0.18;
      const cx = Math.min(Math.max(u, r), 1 - r);
      const cy = Math.min(Math.max(v, r), 1 - r);
      if ((u - cx) ** 2 + (v - cy) ** 2 > r * r) return [0, 0, 0, 0];
    }
    let hits = 0;
    for (let sy = 0; sy < SAMPLES; sy++) {
      for (let sx = 0; sx < SAMPLES; sx++) {
        const su = u + (sx + 0.5) / SAMPLES / size - 0.5 / size;
        const sv = v + (sy + 0.5) / SAMPLES / size - 0.5 / size;
        if (onGlyph(0.5 + (su - 0.5) / k, 0.5 + (sv - 0.5) / k)) hits++;
      }
    }
    const a = hits / (SAMPLES * SAMPLES);
    return [0, 1, 2].map((c) => Math.round(GREEN[c] + (PAPER[c] - GREEN[c]) * a)).concat(255);
  });
}

await writeFile(path.join(OUT, "icon-192.png"), icon(192, { rounded: true, safe: false }));
await writeFile(path.join(OUT, "icon-512.png"), icon(512, { rounded: true, safe: false }));
await writeFile(path.join(OUT, "icon-maskable-512.png"), icon(512, { rounded: false, safe: true }));
await writeFile(path.join(OUT, "apple-touch-icon.png"), icon(180, { rounded: false, safe: false }));
console.log("PWA icons written to", OUT);
