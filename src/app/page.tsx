import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/HomeHero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HomeHero />
        {/* Placeholders for Phase 2/3 */}
        <section id="projects-all" className="px-4 py-24 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p className="text-sm text-muted-foreground">Phase 2 will go here.</p>
        </section>
        <section id="about" className="px-4 py-24 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="text-sm text-muted-foreground">Short bio placeholder.</p>
        </section>
        <section id="contact" className="px-4 py-24 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Contact</h2>
          <p className="text-sm text-muted-foreground">Form lands in Phase 3.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
