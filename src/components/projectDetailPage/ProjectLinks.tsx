function ProjectLinks({ links }: { links?: { github?: string; demo?: string; paper?: string } }) {
  if (!links) return null;
  return (
    <section className="flex gap-4">
      {links.github && <a href={links.github} target="_blank" className="btn">GitHub</a>}
      {links.demo && <a href={links.demo} target="_blank" className="btn">Live Demo</a>}
      {links.paper && <a href={links.paper} target="_blank" className="btn">Paper</a>}
    </section>
  );
}

export default ProjectLinks;