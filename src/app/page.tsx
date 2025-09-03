import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/HomeHero";
import ContactTabs from "@/components/contact/ContactTabs";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { getUpdates } from "@/lib/getUpdates";

import { Code, Cpu, FlaskConical, Star, Quote } from "lucide-react"; // example icons

export default async function HomePage() {
  const featured = projects.filter((p) => p.featured);
  const updates = await getUpdates();
  const latest = updates.slice(0, 4); // show only 3 updates

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <HomeHero />

        {/* Projects Section */}
        <section id="projects-all" className="px-4 py-24 max-w-6xl mx-auto bg-background">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" /> 
            <Link href="/projects" className="hover:underline">Projects</Link>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group block border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition hover:-translate-y-1"
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

        {/* Skills Section */}
        <section id="skills" className="px-4 py-24 max-w-6xl mx-auto bg-muted">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" /> Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="p-6 border rounded-xl bg-background shadow-sm">
              <Cpu className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-medium">Hardware Systems</p>
            </div>
            <div className="p-6 border rounded-xl bg-background shadow-sm">
              <Code className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-medium">Software Development</p>
            </div>
            <div className="p-6 border rounded-xl bg-background shadow-sm">
              <FlaskConical className="mx-auto mb-2 h-8 w-8 text-primary" />
              <p className="font-medium">Research & Prototyping</p>
            </div>
          </div>
        </section>

        {/* Highlights / Stats Section */}
        <section id="highlights" className="px-4 py-24 max-w-6xl mx-auto bg-background">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" /> Highlights
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-3xl font-bold">4+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-3xl font-bold">3</h3>
              <p className="text-sm text-muted-foreground">Leadership Roles</p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm">
              <h3 className="text-3xl font-bold">2</h3>
              <p className="text-sm text-muted-foreground">Research Labs</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="px-4 py-24 max-w-6xl mx-auto bg-muted">
          <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Quote className="h-5 w-5 text-primary" /> Testimonials
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="p-6 border rounded-xl bg-background shadow-sm">
              <p>&quot;Jacob’s dedication and leadership at BitBots transformed the club into a hub for innovation.&quot;</p>
              <footer className="mt-2 text-sm text-muted-foreground">— Connie, Teammate</footer>
            </blockquote>
            <blockquote className="p-6 border rounded-xl bg-background shadow-sm">
              <p>&quot;A strong collaborator with both technical and creative skills.&quot;</p>
              <footer className="mt-2 text-sm text-muted-foreground">— Emiliano, Research Partner</footer>
            </blockquote>
          </div>
        </section>


<section id="updates" className="px-4 py-24 max-w-6xl mx-auto bg-muted">
  <h2 className="text-2xl font-semibold mb-8">Latest Updates</h2>
  <div className="space-y-6">
    {latest.map((update) => (
      <div
        key={update.id}
        className="p-4 border rounded-xl shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-lg font-semibold">{update.title}</h3>
        <p className="text-xs text-muted-foreground mb-1">{update.date}</p>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {update.description}
        </p>
        <Link
          href={`/updates#${update.id}`}
          className="text-primary text-sm mt-2 inline-block hover:underline"
        >
          Read more →
        </Link>
      </div>
    ))}
  </div>

  <div className="text-center mt-8">
    <Link
      href="/updates"
      className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:shadow-lg transition"
    >
      View All Updates
    </Link>
  </div>
</section>



{/* About Section */}
<section id="about" className="px-4 py-24 max-w-6xl mx-auto bg-background">
  <h2 className="text-2xl font-semibold mb-6">About</h2>

  <div className="grid md:grid-cols-2 gap-8 items-center">
    {/* Text */}
    <div>
      <p className="text-base text-muted-foreground mb-4">
        I’m <span className="font-semibold text-foreground">Jacob Vazquez</span>, 
        a Computer Science graduate from San Francisco State University passionate about 
        building systems that blend <span className="font-medium">hardware, software, and research</span>.
        From leading robotics projects like <em>FlyShock</em> and <em>RoboCam</em> to mentoring 
        through BitBots and 3D Printing Club, I thrive on creating impactful solutions and 
        collaborating with diverse teams.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        <span className="px-3 py-1 text-sm border rounded-full bg-muted">Hardware</span>
        <span className="px-3 py-1 text-sm border rounded-full bg-muted">Software</span>
        <span className="px-3 py-1 text-sm border rounded-full bg-muted">Research</span>
        <span className="px-3 py-1 text-sm border rounded-full bg-muted">Leadership</span>
      </div>

      <Link
        href="/about"
        className="inline-block px-6 py-2 bg-primary text-white rounded-lg shadow hover:shadow-lg transition"
      >
        Learn More →
      </Link>
    </div>

    {/* Image placeholder */}
    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-md">
      <Image
        src="/images/headshot.jpg" // swap with your real headshot or lab photo
        alt="Jacob Vazquez"
        fill
        className="object-cover"
      />
    </div>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="px-4 py-24 max-w-6xl mx-auto bg-muted">
        <h2 className="text-3xl font-bold mb-4">Looking to collaborate?</h2>
        <p className="mb-6 text-muted-foreground">I’m open to research, hardware/software projects, and new opportunities.</p>
          <h2 className="text-2xl font-semibold mb-8 text-center">Let’s Connect!</h2>
          <ContactTabs />
        </section>
      </main>

      <Footer />
    </div>
  );
}
