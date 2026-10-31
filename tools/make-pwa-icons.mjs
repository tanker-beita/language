// Draws the PWA icons (rounded green tile with a white "L" and a small sound bar) without any image library.
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

const inRect = (u, v, x0, y0, x1, y1) => u >= x0 && u <= x1 && v >= y0 && v <= y1;

// `safe` shrinks the glyph into the central 60% so maskable icons survive circular cropping.
function icon(size, { rounded, safe }) {
  const k = safe ? 0.62 : 0.8;
  const map = (t) => 0.5 + (t - 0.5) * k;
  return encodePng(size, (u, v) => {
    if (rounded) {
      const r = 0.18;
      const cx = Math.min(Math.max(u, r), 1 - r);
      const cy = Math.min(Math.max(v, r), 1 - r);
      if ((u - cx) ** 2 + (v - cy) ** 2 > r * r) return [0, 0, 0, 0];
    }
    const gu = 0.5 + (u - 0.5) / k;
    const gv = 0.5 + (v - 0.5) / k;
    const letterL = inRect(gu, gv, 0.26, 0.2, 0.40, 0.78) || inRect(gu, gv, 0.26, 0.64, 0.58, 0.78);
    const bars = inRect(gu, gv, 0.64, 0.46, 0.70, 0.78) || inRect(gu, gv, 0.74, 0.3, 0.80, 0.78);
    return letterL || bars ? [...PAPER, 255] : [...GREEN, 255];
  });
}

await writeFile(path.join(OUT, "icon-192.png"), icon(192, { rounded: true, safe: false }));
await writeFile(path.join(OUT, "icon-512.png"), icon(512, { rounded: true, safe: false }));
await writeFile(path.join(OUT, "icon-maskable-512.png"), icon(512, { rounded: false, safe: true }));
await writeFile(path.join(OUT, "apple-touch-icon.png"), icon(180, { rounded: false, safe: false }));
console.log("PWA icons written to", OUT);
