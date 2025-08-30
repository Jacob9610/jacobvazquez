import { projects } from "@/data/projects";

export default function ResumeProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {featured.map((project) => (
        <div
          key={project.id}
          className="border rounded-lg p-4 hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-2">
            {project.tagline}
          </p>
          <p className="text-xs">Tools: {project.tools.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
