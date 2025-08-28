 import { Update } from "@/lib/getUpdates";
import UpdateCard from "./UpdateCard";

export default function UpdatesList({ updates }: { updates: Update[] }) {
  return (
    <div className="space-y-6">
      {updates.map((u) => (
        <UpdateCard key={u.id} update={u} />
      ))}
    </div>
  );
}
