function ProjectDescription({ description }: { description: string }) {
  return (
    <section className="prose max-w-3xl mx-auto mb-10">
      <p>{description}</p>
    </section>
  );
}

export default ProjectDescription;