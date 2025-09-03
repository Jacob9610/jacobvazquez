import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResumeTabs from "@/components/sections/ResumeTabs";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Resume</h1><Link
          href="/api/resume/pdf"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition">
          Download PDF
        </Link>
        <ResumeTabs />
                

      </main>
      <Footer />
    </div>
  );
}
