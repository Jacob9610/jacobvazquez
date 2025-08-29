export type EducationEntry = {
  id: string;
  type: "degree" | "certificate";
  institution: string;
  title: string;
  date: string;
  logo: string; // path in /public/logos
  description?: string;
  link?: string; // for certs only
};

export const education: EducationEntry[] = [
  {
    id: "sfsu",
    type: "degree",
    institution: "San Francisco State University",
    title: "B.S. Computer Science",
    date: "2021 – 2025",
    logo: "/logos/sfsu.png",
    description: "College of Science & Engineering, ACM & BitBots involvement."
  },
  {
    id: "coursera-ml",
    type: "certificate",
    institution: "Coursera",
    title: "Machine Learning Specialization",
    date: "2024",
    logo: "/logos/coursera.png",
    link: "https://coursera.org/verify/12345"
  },
  {
    id: "udemy-react",
    type: "certificate",
    institution: "Udemy",
    title: "React & TypeScript Bootcamp",
    date: "2023",
    logo: "/logos/udemy.png",
    link: "https://udemy.com/certificate/67890"
  }
];
