
import { getUpdates } from "@/lib/getUpdates";
import UpdatesTabs from "@/components/updates/UpdatesTabs"; // <-- add this

// Server component to fetch updates
export default async function UpdatesPage() {
  const updates = await getUpdates();
  return <UpdatesTabs updates={updates} />;
}
