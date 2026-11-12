// Resizes every image in assets/images into public/_img as WebP at each width
// in IMAGE_WIDTHS. Skips files that are already up to date.
import { mkdir, readdir, stat } from "node:fs/promises";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(root, "assets/images");
const OUT = join(root, "public/_img");
const WIDTHS = [256, 384, 640, 828, 1080, 1200, 1920]; // keep in sync with lib/image.ts

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (/\.(png|jpe?g|webp)$/i.test(entry.name)) yield p;
  }
}

let written = 0;
for await (const file of walk(SRC)) {
  const rel = relative(SRC, file);
  const base = rel.slice(0, -extname(rel).length);
  const srcTime = (await stat(file)).mtimeMs;
  const { width: original } = await sharp(file).metadata();

  for (const width of WIDTHS) {
    const out = join(OUT, `${base}-${width}.webp`);
    const existing = await stat(out).catch(() => null);
    if (existing && existing.mtimeMs >= srcTime) continue;
    await mkdir(dirname(out), { recursive: true });
    await sharp(file)
      .resize({ width: Math.min(width, original), withoutEnlargement: true })
      .webp({ quality: 80, alphaQuality: 90, effort: 5 })
      .toFile(out);
    written++;
  }
}
console.log(`images: ${written ? `${written} file(s) written` : "up to date"} → public/_img`);
