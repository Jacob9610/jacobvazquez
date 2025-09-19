import type { Category } from "./categories";


export type Project = {
  id: string; 
  title: string;
  tagline: string;
 categories: Category[]; 
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
    images: ["/images/Projects/line-racer/Biermain.jpg"],
    description: "Line Racer uses a Raspberry Pi with a 5-channel IR sensor array to follow lines while adjusting motor speed with PID control. Ultrasonic sensors are added for obstacle detection.",
    learnings: ["Implemented PID control", "Threading in C", "Sensor integration"],
    roles: ["Firmware Developer"],
    tools: ["Raspberry Pi", "C", "Ultrasonic Sensors"],
    links: { paper: "/images/Projects/line-racer/LineRacerWriteup.pdf" }
  },
  {  
    featured: true,   
    id: "robocam",
    title: "RoboCam",
    tagline: "Microscopic imaging platform built from a modified 3D printer.",
    categories: ["Research", "Hardware"],
    images: ["/images/Projects/Robocam/StentorCam/a.jpg", "/images/Projects/Robocam/StentorCam/GUI.jpg" ],
    description: "RoboCam repurposes a 3D printer into a robotic microscopy system. Controlled via Raspberry Pi, it automates high-throughput imaging for biological research.",
    learnings: ["Serial communication", "Python hardware control", "Research data workflows"],
    roles: ["Researcher", "System Engineer"],
    tools: ["Raspberry Pi", "Python", "3D Printer"],
    links: { github: "https://github.com/screamuch/RoboCam" }
  },
  {  
    id: "portfolio-site",
    title: "Portfolio Website",
    tagline: "Personal portfolio built with Next.js, Tailwind, and Vercel.",
    categories: ["Web Development"],
    images: ["/images/Projects/portfolio-site/cover.png"],
    description: "This website showcases my projects, research, and experience. Built with modular components using Next.js and Tailwind, and deployed on Vercel with CI/CD integration.",
    learnings: ["Next.js routing", "Shadcn UI integration", "Deployment" ,"API integration and data fetching"],
    roles: ["Frontend Developer"],
    tools: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    links: { github: "https://github.com/Jacob9610/jacobvazquez" }
  },
  {
    featured: true,  
    id: "flyshock",
    title: "FlyShock",
    tagline: "Automated behavioral assay platform for fruit flies.",
    categories: ["Research", "Hardware", "Software"],
    images: ["/images/Projects/flyshock/cover.jpg","/images/Projects/flyshock/full.jpg","/images/Projects/flyshock/screen.png","/images/Projects/flyshock/GUIStart.png","/images/Projects/flyshock/output.png"],
    description: "FlyShock delivers controlled stimuli to Drosophila while tracking responses in real-time. The system integrates hardware circuits, sensors, and data logging pipelines.",
    learnings: ["Circuit design", "Embedded programming", "Experiment automation"],
    roles: ["Team Lead", "Hardware Engineer"],
    tools: ["Arduino", "Python", "Custom PCBs"],
    links: { github: "https://https://github.com/Jacob9610/FlyShock" }
  },
  {
    id: "VR_OM_Lift",
    title: "VR_OM_Lift",
    tagline: "VR-controlled forklift robot using Raspberry Pi.",
    categories: ["Hardware", "VR", "Robotics"],
    images: ["/images/Projects/VR_OM_Lift/cover.jpg","/images/Projects/VR_OM_Lift/TheFront.jpg", "/images/Projects/VR_OM_Lift/theLift.jpg"],
    description: "VROM-Fork integrates DC motors, a stepper motor, and camera streaming on a Raspberry Pi to create a VR-controllable forklift robot for training and experimentation.",
    learnings: ["Socket communication", "Camera streaming (MJPEG)", "Motor control with PCA9685"],
    roles: ["System Designer", "Programmer"],
    tools: ["Raspberry Pi", "Python", "Unity", "Meta Quest"],
    links: {github:"https://github.com/Jacob9610/VR_OM_Lift", demo: "https://devpost.com/software/vr_om_lift" }
  },
  {
    id: "stentor-cam",
    title: "Stentor Cam",
    tagline: " Direct descendant of the Robocam Platform, Automated imaging platform for protozoa experiments.",
    categories: ["Research", "Software"],
    images: ["/images/Projects/Robocam/StentorCam/a.jpg", "/images/Projects/Robocam/StentorCam/GUI.jpg"],
    description: "Stentor Cam uses ribbon camera capture and automated G-code movement to record protozoa behavior. It integrates pigpio-controlled LEDs for well illumination.",
    learnings: ["OpenCV video processing", "Serial communication with printers", "GUI automation"],
    roles: ["Research Developer"],
    tools: ["Python", "OpenCV", "pigpio","Robocam Py library"],
    links: { github: "https://github.com/example/stentor-cam" }
  },
  {
    id: "glasses-donation",
    title: "Glasses Donation Platform",
    tagline: "Full-stack platform for glasses donations and requests.",
    categories: ["Web Development", "Nonprofit"],
    images: ["/images/Projects/glasses-donation/cover.png", "/images/Projects/glasses-donation/team.png", "/images/Projects/glasses-donation/about.png"],
    description: "A web app for individuals to donate glasses and for people in need to request them. Built with Express and MySQL backend, and Tailwind + React frontend.",
    learnings: ["Database schema design", "REST APIs", "Frontend/backend integration"],
    roles: ["Backend Lead"],
    tools: ["Express", "MySQL", "React", "TailwindCSS"],
    links: { demo: "https://csc648-04-sp24-csc648-fall24-team03-fork-rypq.vercel.app/", github: "https://github.com/ethanic17/csc648-hopeful-sight" }
  },
  {
    id: "FileSystem",
    title: "File System",
    tagline: "Arduino Uno joystick control with physical outputs.",
    categories: ["Hardware", "Teaching"],
    images: ["/images/Projects/file-system/cover.png"],
    description: "Workshop project teaching Arduino joystick interfacing. Outputs mapped to LEDs and motors, designed as an educational exercise in embedded systems.",
    learnings: ["Arduino programming", "Circuit prototyping", "Workshop curriculum design"],
    roles: ["Workshop Instructor"],
    tools: ["Arduino Uno", "C++", "Breadboard circuits"],
    links: { github: "/images/Projects/file-system/FileSystemWriteup.pdf" }
  }
];
