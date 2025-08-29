"use client";

import Image from "next/image";
import { education } from "@/data/education";

export default function EducationTimeline() {
  return (
    <div className="w-full overflow-x-auto py-12">
      <div className="flex gap-8 px-4 snap-x snap-mandatory">
        {education.map((entry) => (
          <div
            key={entry.id}
            className="min-w-[300px] snap-center border rounded-xl shadow-md bg-card p-6 flex flex-col items-center text-center"
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
            <p className="text-xs text-muted-foreground mb-2">{entry.date}</p>
            {entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-sm text-primary hover:underline"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
