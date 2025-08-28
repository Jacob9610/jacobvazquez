function ProjectLearnings({ learnings }: { learnings: string[] }) {
  return (
    <section className="mb-10">
      <h3 className="font-semibold text-xl mb-2">Learnings</h3>
      <ul className="list-disc list-inside space-y-1">
        {learnings.map((l, i) => <li key={i}>{l}</li>)}
      </ul>
    </section>
  );
}

export default ProjectLearnings;