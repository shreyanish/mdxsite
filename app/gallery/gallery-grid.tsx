type Photo = {
  src: string;
  title: string;
  location: string;
  alt?: string;
};

const photos: Photo[] = [
  {
    src: "/gallery/butcher.JPG",
    title: "Butcher",
    location: "Bargur, Tamil Nadu",
    alt: "Butcher",
  },
  {
    src: "/gallery/bargur-streets.jpg",
    title: "Street",
    location: "Bargur, Tamil Nadu",
    alt: "Streets",
  },
  {
    src: "/gallery/coastline-guard.JPG",
    title: "Coastline",
    location: "Mumbai, Maharashtra",
    alt: "Coastline",
  },
  {
    src: "/gallery/pcrc-bits.jpg",
    title: "Concert",
    location: "Pilani, Rajasthan",
    alt: "Concert",
  },
  {
    src: "/gallery/phone-takesover-peace.jpg",
    title: "Temple Facade",
    location: "Bargur, Tamil Nadu",
    alt: "Temple",
  },
  {
    src: "/gallery/sabarimalai.JPG",
    title: "Sabarimalai",
    location: "Sabarimalai, Kerala",
    alt: "Sabarimalai",
  },
];

export function GalleryGrid() {
  return (
    <div
      className="
        columns-1 sm:columns-2
        gap-[8px]
        pb-[80px]
      "
    >
      {photos.map((photo, i) => (
        <figure
          key={`${photo.src}-${i}`}
          className="mb-[10px] break-inside-avoid"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt ?? photo.location}
            loading={i < 4 ? "eager" : "lazy"}
            className="block h-auto w-full"
          />
          <figcaption
            className="
              mt-[4px] flex items-baseline justify-between gap-[8px]
              text-[11px] font-normal leading-tight text-[#A2A2A2]
            "
          >
            <span className="min-w-0 truncate text-[#404040]">{photo.title}</span>
            <span className="min-w-0 truncate text-right">
              {photo.location}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
