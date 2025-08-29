"use client";

import Image from "next/image";
import { education } from "@/data/education";

export default function EducationHighlights() {
  const schools = education.filter((e) => e.type === "degree");

  return (
    <section id="education" className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {schools.map((entry) => (
          <div
            key={entry.id}
            className="border rounded-xl shadow-md bg-card p-6 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 relative mb-4">
              <Image
                src={entry.logo}
                alt={`${entry.institution} logo`}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg">{entry.title}</h3>
            <p className="text-sm text-muted-foreground">{entry.institution}</p>
            <p className="text-xs text-muted-foreground">{entry.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
