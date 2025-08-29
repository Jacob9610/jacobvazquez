import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EducationTimeline from "@/components/sections/EducationTimeline";

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="px-4 py-16 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Education</h1>
          <EducationTimeline />
        </section>
      </main>
      <Footer />
    </div>
  );
}
