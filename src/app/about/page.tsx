import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="px-4 py-24 max-w-4xl mx-auto space-y-16">
        {/* Story Section */}
        <section>
          <h1 className="text-3xl font-bold mb-6">About Me</h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Hey, I’m Jacob! I’m a recent Computer Science grad from San
              Francisco State University who’s always bouncing between software,
              hardware, and research. Whether it’s coding up a clean backend,
              wiring up motors, or experimenting with imaging rigs in the lab, I
              like building things that blur the line between digital and
              physical.
            </p>
            <p>
              My journey into tech didn’t start with anything fancy — just a lot
              of curiosity and taking things apart. I was the kind of kid who
              wanted to know <em>how</em> things worked, even if it meant
              breaking a few gadgets along the way. That habit of tinkering
              slowly turned into a love for coding, robotics, and eventually
              full-on research projects.
            </p>
            <p>
              At SFSU, I dove headfirst into clubs and labs. I founded{" "}
              <strong>BitBots</strong>, a hardware-focused student club, and
              served as VP of the <strong>3D Printing & Design Club</strong>,
              helping students learn fabrication and prototyping. I also got
              involved with <strong>ACM</strong> and worked on collaborative
              projects that taught me how to lead, mentor, and, most
              importantly, learn from other people.
            </p>
            <p>
              Right now, my work revolves around research in the{" "}
              <strong>Esquerra Lab</strong>, where I helped develop projects
              like <strong>RoboCam</strong> and automated microscopy systems for
              studying organisms like <em>Stentor</em>. I’ve also led projects
              like <strong>FlyShock</strong> and taught robotics in community
              courses. All of these experiences keep me sharp across coding,
              hardware integration, and research workflows.
            </p>
            <p>
              Looking ahead, I’m excited about roles where I can combine all
              three — software, hardware, and research — into something
              impactful. I’m especially open to collaborations, projects, or
              opportunities where I get to solve tricky problems and build
              systems that matter. If that sounds like your vibe too, let’s
              connect!
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-2">Software</h3>
              <ul className="space-y-1">
                <li>C, C++, Java, JavaScript</li>
                <li>Express, MySQL, Tailwind, React</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Hardware</h3>
              <ul className="space-y-1">
                <li>Raspberry Pi, Arduino</li>
                <li>Motor Drivers, Sensors</li>
                <li>3D Printing & Prototyping</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Research</h3>
              <ul className="space-y-1">
                <li>Microscopy Automation</li>
                <li>Image Analysis & Data Collection</li>
                <li>Scientific Writing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Roles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold">President, BitBots</h3>
              <p className="text-sm mt-2">
                Built a hardware club into a hub for student projects and
                mentoring.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold">VP, 3D Printing & Design Club</h3>
              <p className="text-sm mt-2">
                Guided students in fabrication and prototyping with 3D printing.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold">Researcher, Esquerra Lab</h3>
              <p className="text-sm mt-2">
                Developed RoboCam and microscopy tools to study{" "}
                <em>Stentor</em>.
              </p>
            </div>
            <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-bold">Mentor, CCC Summer Course</h3>
              <p className="text-sm mt-2">
                Taught robotics and microscopy to K–12 students in community
                workshops.
              </p>
            </div>
          </div>

          {/* Resume link */}
          <div className="mt-8 text-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
            >
              View Full Resume
            </a>
          </div>
        </section>

        {/* Photos Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Photos</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Image
              src="/images/about/headshot.jpg"
              alt="Headshot"
              width={500}
              height={500}
              className="rounded-xl object-cover"
            />
            <Image
              src="/images/about/lab-action.jpg"
              alt="Lab Action"
              width={500}
              height={500}
              className="rounded-xl object-cover"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
