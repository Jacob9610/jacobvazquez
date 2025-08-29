"use client";

import { useEffect } from "react";

export default function LinkedInWidget() {
  useEffect(() => {
    // Load the Elfsight platform script only once
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex justify-center">
      {/* Replace with your widget ID */}
      <div
        className="elfsight-app-a49256c0-28fc-4085-bec2-fbe4d9f1def5"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}
