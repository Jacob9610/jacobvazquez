import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/HomeHero";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HomeHero />
        {/* Placeholders for Phase 2/3 */}
      
                {/* Projects Section */}
        <section id="projects-all"  className="px-4 py-24 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2"><Link href="/projects" className="hover:underline">Projects</Link></h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={project.images[0] || "/placeholder.png"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
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
