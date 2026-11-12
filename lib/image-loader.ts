import { IMAGE_WIDTHS, imagePath } from "./image";

export default function staticImageLoader({ src, width }: { src: string; width: number }) {
  // Snap to the nearest generated width at or above the request.
  const size = IMAGE_WIDTHS.find((w) => w >= width) ?? IMAGE_WIDTHS[IMAGE_WIDTHS.length - 1];
  return imagePath(src, size);
}
