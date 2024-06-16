import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const SITEDATA = {
  name: "Ayush Gupta",
  initials: "AG",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. Currently, I work mostly with Python, NextJS, Node.js and Go. I have over 2+ years of experience working remotely.",
  avatarUrl: "https://avatars.githubusercontent.com/u/28400861?v=4",
  contact: {
    email: "siayush.gupta@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/siAyush",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/siayush/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/siAyushh",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Galgotias University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2017",
      end: "2021",
    },
  ],
  languages: ["JavaScript", "TypeScript", "Python", "Go", "C"],
  technologies: [
    "React/Next.js",
    "Node.js",
    "MongoDB",
    "Docker",
    "AWS",
    "PostgreSQL",
  ],
  projects: [
    {
      title: "miro",
      techStack: ["TypeScript", "Next.js", "Clerk", "pnpm", "shadcn/ui"],
      description: "A Drawing app",
      link: {
        href: "https://github.com/siAyush/miro",
      },
    },
    {
      title: "ScratchML",
      techStack: ["Python", "NumPy"],
      description:
        "Implementations of the Machine Learning models and algorithms from scratch using NumPy only.",
      link: {
        href: "https://github.com/siAyush/ScratchML",
      },
    },
    {
      title: "Natours",
      techStack: ["NodeJS", "ExpressJs", "MongoDB", "Node.js"],
      description:
        "An tour booking web app with user authentication and authorization.",
      link: {
        href: "https://github.com/siAyush/Natours",
      },
    },
    {
      title: "Model-Zoo",
      techStack: ["Pytorch", "Python"],
      description: "Implementation of various deep learning models in Pytorch",
      link: {
        href: "https://github.com/siAyush/Model-Zoo",
      },
    },
  ],
  work: [
    {
      company: "Infogain",
      link: "https://www.infogain.com/",
      badges: ["Remote"],
      title: "Full Stack Engineer",
      start: "2022",
      end: "Present",
      description:
        "Implemented new features, led a squad to add GTM(Google Tag Manager), improved code coverage, initiated migration from NextJS10 to NextJS13 and . Technologies: NextJs, TypeScript, JavaScript",
    },
    {
      company: "NNT",
      link: "https://www.linkedin.com/company/nggawe-nirman/",
      badges: ["Remote"],
      title: "Full Stack Engineer Intern",
      start: "2021",
      end: 2022,
      description:
        "Worked on a monorepo PoC(Proof of Concept) for NextJs Project and moved to production.",
    },
  ],
};
