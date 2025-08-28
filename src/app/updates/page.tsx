 import { getUpdates } from "@/lib/getUpdates";
import UpdatesList from "@/components/updates/UpdatesList";

export default async function UpdatesPage() {
  const updates = await getUpdates();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Updates</h1>
      <UpdatesList updates={updates} />
    </main>
  );
}
