"use client";

import { useState } from "react";
import ResumeProjects from "./ResumeProjects";
import ResumeCard from "@/components/ui/ResumeCard";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { education } from "@/data/education"; // from Phase 5

const tabs = ["Experience", "Projects", "Education", "Skills"];

export default function ResumeTabs() {
  const [activeTab, setActiveTab] = useState("Experience");

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex gap-4 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "border-b-2 border-primary font-semibold"
                : "text-muted-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Experience" && (
        <div className="space-y-6">
      {experiences.map((exp) => (
        <ResumeCard key={exp.id} {...exp} />
      ))}
        </div>
      )}

      {activeTab === "Projects" && <ResumeProjects />}

{activeTab === "Education" && (
  <div className="space-y-6">
    {education.map((ed) => (
      <div key={ed.id} className="border-b pb-4 flex items-start gap-4">
        {/* Logo */}
        <img
          src={ed.logo}
          alt={ed.institution}
          className="w-12 h-12 object-contain"
        />

        <div>
          {/* Title (degree/cert) */}
          <h3 className="font-semibold">{ed.title}</h3>
          <p className="text-sm text-muted-foreground">
            {ed.institution} • {ed.date}
          </p>

          {/* Optional description */}
          {ed.description && (
            <p className="text-sm mt-1">{ed.description}</p>
          )}

          {/* Optional link (for certs) */}
          {ed.link && (
            <a
              href={ed.link}
              target="_blank"
              className="text-primary underline text-sm"
            >
              View Credential
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
)}


      {activeTab === "Skills" && (
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
      )}
    </div>
  );
}
