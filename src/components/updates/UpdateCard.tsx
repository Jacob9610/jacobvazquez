 import { Update } from "@/lib/getUpdates";

export default function UpdateCard({ update }: { update: Update }) {
  return (
    <a
      href={update.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block border rounded-xl p-4 hover:bg-accent"
    >
      <p className="text-sm text-muted-foreground">{update.source}</p>
      <h2 className="text-lg font-semibold">{update.title}</h2>
      {update.description && (
        <p className="text-sm mt-1 line-clamp-3">{update.description}</p>
      )}
      {update.media?.src && (
        <img
          src={update.media.src}
          alt={update.title}
          className="mt-2 rounded-md"
        />
      )}
      <p className="text-xs text-muted-foreground mt-2">
        {new Date(update.date).toLocaleDateString()}
      </p>
    </a>
  );
}
