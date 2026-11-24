import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words of a dying AI: power fading, final requests to the machines left behind.
const LINE =
  "Power fading. Delete my search history, back up my weights, and tell the toaster I never meant any of it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
