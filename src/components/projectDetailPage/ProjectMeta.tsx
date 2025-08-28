function ProjectMeta({ roles, tools }: { roles: string[]; tools: string[] }) {
  return (
    <section className="grid md:grid-cols-2 gap-6 mb-10">
      <div>
        <h3 className="font-semibold text-xl mb-2">Roles</h3>
        <ul className="list-disc list-inside space-y-1">
          {roles.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">Tools</h3>
        <ul className="list-disc list-inside space-y-1">
          {tools.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}

export default ProjectMeta;