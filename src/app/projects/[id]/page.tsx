import { projects } from "@/data/projects";
import {
  ProjectHeader,
  ProjectCarousel,
  ProjectDescription,
  ProjectVideo,
  ProjectMeta,
  ProjectLearnings,
  ProjectLinks,
} from "@/components/projectDetailPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ await params
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-8 text-center">❌ Project not found</div>;
  }

  return (
  <div className="min-h-screen bg-background text-foreground">
      <Navbar />
    <main className="px-6 py-12 max-w-5xl mx-auto space-y-12">
      <ProjectHeader title={project.title} tagline={project.tagline} />
      <ProjectCarousel images={project.images} />
      <ProjectDescription description={project.description} />
      <ProjectVideo video={project.video} />
      <ProjectMeta roles={project.roles} tools={project.tools} />
      <ProjectLearnings learnings={project.learnings} />
      <ProjectLinks links={project.links} />
    </main>
    <Footer/>
    </div>
  );
}

