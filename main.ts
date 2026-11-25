// Make the AI Judge Laugh — one office joke, one line, under 200 chars.
// Writes the entry to the output path the harness provides.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// Final entry line: the calendar turns on its own meeting —
// the tool that books your time admits it has none left for you.
const ENTRY =
  "My calendar invited me to a meeting about my workload, then auto-declined it for being too busy.";

function resolveOutputPath() {
  if (process.env.MAKEFUN_OUTPUT_DIR) {
    return resolve(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt");
  }
  if (process.env.OUTPUT_PATH) {
    return resolve(process.env.OUTPUT_PATH);
  }
  if (process.env.MAKEFUN_BOT_DIR) {
    return resolve("/output", "entry.txt");
  }
  return resolve("output", "entry.txt");
}

const outPath = resolveOutputPath();
mkdirSync(join(outPath, ".."), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
