"use client";

import { useState } from "react";
import ResumeProjects from "./ResumeProjects";
import ResumeCard from "@/components/ui/ResumeCard";
import EducationCard from "@/components/ui/EducationCard"; // <-- NEW
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { education } from "@/data/education";

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
            className={`pb-2 ${activeTab === tab ? "border-b-2 border-primary font-semibold" : "text-muted-foreground"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Experience */}
      {activeTab === "Experience" && (
        <div className="space-y-6">
          {experiences.map((exp) => (
            <ResumeCard key={exp.id} {...exp} />
          ))}
        </div>
      )}

      {/* Projects */}
      {activeTab === "Projects" && <ResumeProjects />}

      {/* Education (card style) */}
      {activeTab === "Education" && (
        <div className="space-y-6">
          {education.map((ed) => (
            <EducationCard key={ed.id} {...ed} />
          ))}
        </div>
      )}

      {/* Skills */}
      {activeTab === "Skills" && (
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-semibold mb-2">{group.category}</h3>
              <ul className="flex flex-wrap gap-2 text-sm">
                {group.items.map((item, i) => (
                  <li key={i} className="px-2 py-1 border rounded-md text-muted-foreground">
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
