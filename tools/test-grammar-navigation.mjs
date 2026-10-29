import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../src/app.js", import.meta.url), "utf8");
// Execute the actual two reset paths with their non-navigation side effects isolated.
const start = source.indexOf("    function switchSpeakingSentence(");
const end = source.indexOf("    // Sentences with a mistake", start);
assert.ok(start >= 0 && end > start);
const sentences = [{ grammar: "first saved analysis" }, { grammar: "second saved analysis" }, { grammar: "" }];
const state = { sentences, index: 0, grammarVisible: true, fullTextAdvancing: false };
let reads = 0;
let resets = 0;
const noop = () => {};
const context = vm.createContext({
  state,
  typingBox: { value: "draft" },
  currentGrammar: () => { reads += 1; return sentences[state.index].grammar; },
  resetGrammarInteraction: () => { resets += 1; },
  stopFullTextReading: noop, stopSpeakingPractice: noop, stopSentenceAudio: noop,
  closeDictionaryLookup: noop, updateSpeechRateIndicator: noop, resetSpeakingResult: noop,
  render: noop, saveLastPosition: noop, autoSpeakCurrentSentence: noop,
  fetch: () => { throw new Error("Navigation must not request AI analysis"); }
});
vm.runInContext(source.slice(start, end), context);

state.index = 1;
context.resetCurrent();
assert.equal(state.grammarVisible, true, "Open panel survives navigation to a saved analysis");
assert.equal(sentences[state.index].grammar, "second saved analysis");
state.index = 2;
context.resetCurrent();
assert.equal(state.grammarVisible, false, "A sentence without analysis closes the panel");
state.index = 0;
const before = reads;
context.resetCurrent();
assert.equal(state.grammarVisible, false, "A closed panel must not open automatically");
assert.equal(reads, before);
state.grammarVisible = true;
context.switchSpeakingSentence(1);
assert.equal(state.grammarVisible, true, "Speaking navigation retains saved analysis too");
assert.equal(state.index, 1);
context.switchSpeakingSentence(2);
assert.equal(state.grammarVisible, false);
context.switchSpeakingSentence(0);
assert.equal(state.grammarVisible, false);
assert.equal(resets, 6, "Each sentence resets node expansion independently");
console.log("Grammar navigation: saved analysis retention, no-analysis fallback and closed-panel behavior passed.");
