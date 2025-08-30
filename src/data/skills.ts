export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Software",
    items: [
      "JavaScript", "TypeScript", "React", "Node.js", "Express",
      "Tailwind CSS", "MySQL", "Vitest", "Python", "C", "C++", "Java"
    ],
  },
  {
    category: "Hardware",
    items: [
      "Raspberry Pi", "Arduino", "CircuitPython", "DC/Stepper Motor Control",
      "Sensors (IR, Ultrasonic, Color, Joystick)", "NeoPixels",
      "3D Printing (Sovol, Prusa)", "Soldering & Circuit Prototyping"
    ],
  },
  {
    category: "Research",
    items: [
      "Microscopy (Stentor, Drosophila assays)",
      "Behavioral Imaging Automation",
      "Data Collection & Analysis",
      "Lab Equipment Adaptation",
      "Collaborative Research Projects"
    ],
  },
  {
    category: "Leadership & Teaching",
    items: [
      "Workshop Design & Facilitation",
      "Peer Mentorship",
      "K-12 STEM Instruction (Lego Robotics)",
      "Leadership (BitBots, 3D Printing & Design Club)",
      "Event Organization (BitBots, ACM)"
    ],
  },
];
 