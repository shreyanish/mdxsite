type Photo = {
  src: string;
  location: string;
  alt?: string;
};

// Replace these with your own photos.
// { src: "/gallery/tokyo-1.jpg", location: "Shibuya, Tokyo", alt: "Crossing at night" }
const photos: Photo[] = [];

export function GalleryGrid() {
  return (
    <div
      className="
        columns-2 md:columns-3
        gap-[6px]
        [column-fill:_balance]
        pb-[80px]
      "
    >
      {photos.map((photo, i) => (
        <figure
          key={`${photo.src}-${i}`}
          className="mb-[20px] break-inside-avoid"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt ?? photo.location}
            loading={i < 4 ? "eager" : "lazy"}
            className="w-full h-auto block rounded-[4px]"
          />
          <figcaption className="mt-[6px] text-[16px] text-[#A2A2A2] font-normal leading-normal">
            {photo.location}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
