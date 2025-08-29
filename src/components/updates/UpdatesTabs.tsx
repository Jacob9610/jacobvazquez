"use client";

import { useState } from "react";
import { Update } from "@/lib/getUpdates";
import UpdatesList from "./UpdatesList";
import LinkedInWidget from "./LinkedInWidget";

export default function UpdatesTabs({ updates }: { updates: Update[] }) {
  const [activeTab, setActiveTab] = useState<"updates" | "linkedin">("updates");

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Updates</h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b mb-6">
        <button
          onClick={() => setActiveTab("updates")}
          className={`pb-2 px-2 border-b-2 transition ${
            activeTab === "updates"
              ? "border-primary text-primary font-semibold"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          All Updates
        </button>
        <button
          onClick={() => setActiveTab("linkedin")}
          className={`pb-2 px-2 border-b-2 transition ${
            activeTab === "linkedin"
              ? "border-primary text-primary font-semibold"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          LinkedIn Feed
        </button>
      </div>

      {/* Content */}
      {activeTab === "updates" && <UpdatesList updates={updates} />}
      {activeTab === "linkedin" && <LinkedInWidget />}
    </main>
  );
}
