import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectsIndexPage() {
  return (
  <div className="min-h-screen bg-background text-foreground">
      <Navbar />
    <main className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`} 
            className="group block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image src={project.images[0]} alt={project.title} width={800} height={450} className="w-full h-auto rounded-lg" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-muted-foreground">{project.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
    <Footer/>
    </div>
  );
}
