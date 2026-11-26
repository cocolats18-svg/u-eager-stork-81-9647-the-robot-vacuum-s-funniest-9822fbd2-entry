import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The robot vacuum's excuse for missing a spot.
// Joke: the dust bunny organised, so the vacuum's suction — a good
// union-respecting machine — refused to cross the picket line.
const ENTRY =
  "I didn't miss that spot — the dust bunny unionised, and my suction respects a picket line.";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
