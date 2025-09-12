import Image from "next/image";

type Props = {
  images: string[];   // e.g. project.images
  title: string;      // e.g. project.title (for alt text)
};

export default function ProjectCarousel({ images = [], title }: Props) {
  if (!images.length) return null;

  return (
    <div className="flex gap-4 overflow-x-auto snap-x">
      {images.map((src, idx) => (
        <div key={`${src}-${idx}`} className="shrink-0 w-[320px] snap-start">
          <Image
            src={src}
            alt={`${title} image ${idx + 1}`}
            width={1280}
            height={720}
            className="w-full h-auto rounded-lg object-cover"
            priority={idx === 0}
          />
        </div>
      ))}
    </div>
  );
}
