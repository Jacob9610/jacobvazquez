// src/components/ui/ResumeCard.tsx
type ResumeCardProps = {
  role: string;
  org?: string;
  location?: string;
  date: string;
  bullets?: string[];
};

export default function ResumeCard({ role, org, location, date, bullets }: ResumeCardProps) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-card">
      <h3 className="font-semibold text-lg">
        {role}{org && `, ${org}`}
      </h3>
      <p className="text-sm text-muted-foreground">{location} • {date}</p>
      {bullets && bullets.length > 0 && (
        <ul className="mt-2 list-disc list-inside text-sm space-y-1">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}
