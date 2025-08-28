function ProjectVideo({ video }: { video?: { type: string; url: string } }) {
  if (!video) return null;
  return (
    <section className="mb-10 text-center">
      <h2 className="text-2xl font-semibold mb-4">Watch it in Action</h2>
      {video.type === "youtube" || video.type === "vimeo" ? (
        <div className="aspect-video w-full max-w-3xl mx-auto">
          <iframe
            src={video.url}
            className="w-full h-full rounded-xl"
            allowFullScreen
          />
        </div>
      ) : (
        <video controls className="w-full max-w-3xl mx-auto rounded-xl">
          <source src={video.url} />
        </video>
      )}
    </section>
  );
}

export default ProjectVideo;