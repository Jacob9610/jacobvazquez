import { getUpdates } from "@/lib/getUpdates";
import UpdatesTabs from "@/components/updates/UpdatesTabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Server component to fetch updates
export default async function UpdatesPage() {
  const updates = await getUpdates();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <UpdatesTabs updates={updates} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
