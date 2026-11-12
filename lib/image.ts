/**
 * Static image pipeline (the site is a static export, so there is no runtime
 * image optimizer). Originals live in /assets/images; `npm run images`
 * (run automatically before dev and build) writes resized WebP files to
 * /public/_img at every width below, and the loader maps next/image requests
 * onto those files.
 */
export const IMAGE_WIDTHS = [256, 384, 640, 828, 1080, 1200, 1920] as const;

/** "/work/pico-ai.jpg" + 1080 → "/_img/work/pico-ai-1080.webp" */
export function imagePath(src: string, width: number) {
  const base = src.replace(/^\//, "").replace(/\.[^./]+$/, "");
  return `/_img/${base}-${width}.webp`;
}

/** Largest generated variant, for structured data and sitemaps. */
export function largestImagePath(src: string) {
  return imagePath(src, IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1]);
}
