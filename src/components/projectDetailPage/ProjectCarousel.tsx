function ProjectCarousel({ images }: { images: string[] }) {
  return (
    <div className="mb-10">
      {/* Replace with Embla or shadcn carousel */}
      <div className="flex overflow-x-scroll gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Project image ${i+1}`} className="rounded-2xl w-full max-w-lg object-cover" />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;