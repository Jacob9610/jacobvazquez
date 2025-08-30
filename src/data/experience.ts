

export type Experience = {
  id: string;
  role: string;
  org?: string;
  location?: string;
  date: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    id: "bitbots-president",
    role: "President",
    org: "BitBots (Hardware & Electronics Club)",
    location: "San Francisco, CA",
    date: "2023 – 2025",
    bullets: [
      "Led a student club focused on hardware, robotics, and electronics projects.",
      "Organized workshops on Arduino, Raspberry Pi, and sensor integration.",
      "Mentored members on personal and group projects, transitioning club to support individual initiatives.",
    ],
  },
  {
    id: "3dprinting-vp",
    role: "Vice President",
    org: "3D Printing & Design Club",
    location: "San Francisco, CA",
    date: "2023 – 2025",
    bullets: [
      "Coordinated 3D printing resources for students and faculty.",
      "Assisted with design workshops and hands-on prototyping sessions.",
      "Helped secure lab space and equipment access for members.",
    ],
  },
  {
    id: "lego-robotics",
    role: "Lego Robotics Instructor",
    org: "", // intentionally blank (you said leave open until you have company name)
    location: "Redwood City, CA",
    date: "Summer 2025",
    bullets: [
      "Taught Lego Robotics to grades 3–7, introducing mechanical design and basic programming concepts.",
      "Designed structured activities to engage students in problem-solving and teamwork.",
    ],
  },
  {
    id: "peer-mentor-ccc",
    role: "Peer Mentor – Robotic Microscopy Team",
    org: "CCC Summer Course",
    location: "San Francisco, CA",
    date: "Summer 2025",
    bullets: [
      "Mentored students in robotic microscopy research with *Stentor coeruleus*.",
      "Guided hands-on projects integrating Raspberry Pi, imaging, and automation.",
      "Supported team collaboration and project presentations.",
    ],
  },
  {
    id: "researcher-roboCam",
    role: "Undergraduate Researcher",
    org: "Esquerra Lab, SFSU",
    location: "San Francisco, CA",
    date: "2023 – 2025",
    bullets: [
      "Led the RoboCam project, repurposing 3D printers for automated microscopy.",
      "Developed imaging assays for *Stentor* and *Drosophila* behavior experiments.",
      "Contributed to FlyShock and Stentor Cam projects, combining hardware and software systems.",
    ],
  },
  {
    id: "discussion-leader",
    role: "Discussion Leader",
    org: "SFSU Summer Bridge Program",
    location: "San Francisco, CA",
    date: "Summer 2025",
    bullets: [
      "Facilitated peer-led discussions for incoming first-year students.",
      "Mentored students on college transition, study habits, and campus resources.",
    ],
  },
  {
    id: "acm-officer",
    role: "Officer / Member",
    org: "ACM Chapter, SFSU",
    location: "San Francisco, CA",
    date: "2023 – 2025",
    bullets: [
    
      "Collaborated with officers to foster a strong community of computer science students.",
      "Assisted in organizing hackathons and technical workshops.",
    ],
  },
];

