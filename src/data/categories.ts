// src/data/categories.ts
export const categories = [
  "Hardware",
  "Software",
  "Mechanical",
  "Research",
  "VR",
  "Web Development",
  "Community",
  "Nonprofit",
  "Teaching",
  "Robotics"
] as const;

export type Category = typeof categories[number];
