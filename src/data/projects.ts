import type { Category } from "./categories";


export type Project = {
  id: string; 
  title: string;
  tagline: string;
 categories: Category[];  // <-- uses centralized list
  featured?: boolean;
  images: string[];
  video?: {
    type: "youtube" | "vimeo" | "local";
    url: string;
    thumbnail?: string;
  };
  description: string;
  learnings: string[];
  roles: string[];
  tools: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
  };
};

export const projects: Project[] = [
  {
    featured: true,   
    id: "line-racer",
    title: "Line Racer",
    tagline: "PID-controlled autonomous car with IR tracking.",
    categories: ["Hardware", "Software"],
    images: ["/images/line-racer/cover.jpg"],
    description: "Line Racer uses a Raspberry Pi with a 5-channel IR sensor array to follow lines while adjusting motor speed with PID control. Ultrasonic sensors are added for obstacle detection.",
    learnings: ["Implemented PID control", "Threading in C", "Sensor integration"],
    roles: ["Firmware Developer"],
    tools: ["Raspberry Pi", "C", "Ultrasonic Sensors"],
    links: { github: "https://github.com/example/line-racer" }
  },
  {  
    featured: true,   
    id: "robocam",
    title: "RoboCam",
    tagline: "Microscopic imaging platform built from a modified 3D printer.",
    categories: ["Research", "Hardware"],
    images: ["/images/robocam/cover.jpg"],
    description: "RoboCam repurposes a 3D printer into a robotic microscopy system. Controlled via Raspberry Pi, it automates high-throughput imaging for biological research.",
    learnings: ["Serial communication", "Python hardware control", "Research data workflows"],
    roles: ["Researcher", "System Engineer"],
    tools: ["Raspberry Pi", "Python", "3D Printer"],
    links: { github: "https://github.com/example/robocam" }
  },
  {
    id: "cyber-stacker",
    title: "Cyber Stacker",
    tagline: "VR-controlled forklift training simulator.",
    categories: ["VR", "Hardware", "Software"],
    images: ["/images/cyber-stacker/cover.jpg"],
    description: "Cyber Stacker adapts forklifts for VR training. Operators control vehicles via headsets, with motors driven by a Raspberry Pi and Unity providing the virtual interface.",
    learnings: ["Unity socket communication", "VR to hardware interfacing", "System integration"],
    roles: ["Hardware Lead", "Software Integrator"],
    tools: ["Unity", "Raspberry Pi", "C#", "L298N Motor Driver"],
    links: { github: "https://github.com/example/cyber-stacker" }
  },
  {  
    id: "portfolio-site",
    title: "Portfolio Website",
    tagline: "Personal portfolio built with Next.js, Tailwind, and Vercel.",
    categories: ["Web Development"],
    images: ["/images/portfolio-site/cover.jpg"],
    description: "This website showcases my projects, research, and experience. Built with modular components using Next.js and Tailwind, and deployed on Vercel with CI/CD integration.",
    learnings: ["Next.js routing", "Shadcn UI integration", "Deployment pipelines"],
    roles: ["Frontend Developer"],
    tools: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    links: { github: "https://github.com/example/portfolio-site" }
  },
  {
    featured: true,  
    id: "flyshock",
    title: "FlyShock",
    tagline: "Automated behavioral assay platform for fruit flies.",
    categories: ["Research", "Hardware", "Software"],
    images: ["/images/flyshock/cover.jpg"],
    description: "FlyShock delivers controlled stimuli to Drosophila while tracking responses in real-time. The system integrates hardware circuits, sensors, and data logging pipelines.",
    learnings: ["Circuit design", "Embedded programming", "Experiment automation"],
    roles: ["Team Lead", "Hardware Engineer"],
    tools: ["Arduino", "Python", "Custom PCBs"],
    links: { github: "https://github.com/example/flyshock" }
  },
  {
    id: "vrom-fork",
    title: "VROM-Fork",
    tagline: "VR-controlled forklift robot using Raspberry Pi.",
    categories: ["Hardware", "VR", "Robotics"],
    images: ["/images/vrom-fork/cover.jpg"],
    description: "VROM-Fork integrates DC motors, a stepper motor, and camera streaming on a Raspberry Pi to create a VR-controllable forklift robot for training and experimentation.",
    learnings: ["Socket communication", "Camera streaming (MJPEG)", "Motor control with PCA9685"],
    roles: ["System Designer", "Programmer"],
    tools: ["Raspberry Pi", "Python", "Unity", "Meta Quest"],
    links: { github: "https://github.com/example/vrom-fork" }
  },
  {
    id: "stentor-cam",
    title: "Stentor Cam",
    tagline: "Automated imaging platform for protozoa experiments.",
    categories: ["Research", "Software"],
    images: ["/images/stentor-cam/cover.jpg"],
    description: "Stentor Cam uses ribbon camera capture and automated G-code movement to record protozoa behavior. It integrates pigpio-controlled LEDs for well illumination.",
    learnings: ["OpenCV video processing", "Serial communication with printers", "GUI automation"],
    roles: ["Research Developer"],
    tools: ["Python", "OpenCV", "pigpio"],
    links: { github: "https://github.com/example/stentor-cam" }
  },
  {
    id: "glasses-donation",
    title: "Glasses Donation Platform",
    tagline: "Full-stack platform for glasses donations and requests.",
    categories: ["Web Development", "Nonprofit"],
    images: ["/images/glasses-donation/cover.jpg"],
    description: "A web app for individuals to donate glasses and for people in need to request them. Built with Express and MySQL backend, and Tailwind + React frontend.",
    learnings: ["Database schema design", "REST APIs", "Frontend/backend integration"],
    roles: ["Backend Lead"],
    tools: ["Express", "MySQL", "React", "TailwindCSS"],
    links: { github: "https://github.com/example/glasses-donation" }
  },
  {
    id: "acm-platform",
    title: "ACM Centralized Platform",
    tagline: "Website and Discord bot for ACM chapter management.",
    categories: ["Web Development", "Community"],
    images: ["/images/acm-platform/cover.jpg"],
    description: "A centralized platform for ACM members to connect, manage events, and receive notifications. Includes Discord bot integration for real-time engagement.",
    learnings: ["Entity-relationship design", "Discord bot API", "Community tooling"],
    roles: ["Backend Lead", "Database Designer"],
    tools: ["Express", "MySQL", "Discord.js"],
    links: { github: "https://github.com/example/acm-platform" }
  },
  {
    id: "joystick-controller",
    title: "Joystick Controller Workshop",
    tagline: "Arduino Uno joystick control with physical outputs.",
    categories: ["Hardware", "Teaching"],
    images: ["/images/joystick-controller/cover.jpg"],
    description: "Workshop project teaching Arduino joystick interfacing. Outputs mapped to LEDs and motors, designed as an educational exercise in embedded systems.",
    learnings: ["Arduino programming", "Circuit prototyping", "Workshop curriculum design"],
    roles: ["Workshop Instructor"],
    tools: ["Arduino Uno", "C++", "Breadboard circuits"],
    links: { github: "https://github.com/example/joystick-controller" }
  }
];
