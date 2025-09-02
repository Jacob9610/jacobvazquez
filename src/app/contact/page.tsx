import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactTabs from "@/components/contact/ContactTabs";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-24 max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8 text-center">Let’s Connect</h1>
        <ContactTabs />
      </main>
      <Footer />
    </div>
  );
}
