function ProjectHeader({ title, tagline }: { title: string; tagline: string }) {
  return (
    <header className="mb-6 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg text-muted-foreground">{tagline}</p>
    </header>
  );
}

export default ProjectHeader;