import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ResumeCard from "@/components/ui/ResumeCard";
import { experiences } from "@/data/experience";
import Image from "next/image";
import { skills } from "@/data/skills";
import Link from "next/link";

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


        {/* Roles Section */}
        <section>
          <div className="space-y-6">
            {experiences.slice(0, 3).map((exp) => (
              <ResumeCard key={exp.id} role={exp.role} org={exp.org} bullets={exp.bullets}  date={exp.date}  />
            ))}

          </div>

          {/* Resume link */}
          <div className="mt-8 text-center">
            <Link href="/resume">Resume</Link>
          </div>
        </section>


       <section>
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-semibold mb-2">{group.category}</h3>
              <ul className="flex flex-wrap gap-2 text-sm">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="px-2 py-1 border rounded-md text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
