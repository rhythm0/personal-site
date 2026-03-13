import { GalleryItem } from "../types";

export default function GalleryTile({ title, subtitle }: GalleryItem) {
  return (
    <div className="group rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-black p-5 transition duration-300 hover:border-neutral-500">
      <div className="mb-6 aspect-[4/5] rounded-2xl border border-neutral-800 bg-neutral-900/80" />
      <h3 className="text-base font-medium text-white">{title}</h3>
      <p className="mt-1 text-sm text-neutral-500">{subtitle}</p>
    </div>
  );
}
