import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const SITEDATA = {
  name: "Anubhav Singh",
  initials: "AS",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  about:
    "Does backend for one half, learning architecture for the other.",
  summary:
    "I’m you would have obviously read my name, a Software Developer with a knack for turning other people’s idea (for now) into code. When I’m not busy making pixels perfect or debugging my life choices (Is an Americano better made with a Moka Pot or a French Press?), you can find me reading system architecture, or plotting world domination (just kidding, or am I?).",
  avatarUrl: "https://avatars.githubusercontent.com/u/28955148?v=4",
  contact: {
    email: "anubhavraj.08@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aanurraj",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anubhavrajsingh/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/aanurraj",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Galgotias University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2016",
      end: "2020",
    },
  ],
  languages: ["JavaScript", "Java", "Python", "Go", "C++"],
  technologies: [
    "Node.js",
    "MongoDB",
    "Docker",
    "AWS",
    "Kubernetes",
    "MySQL",
  ],
  projects: [
    {
      title: "The Daily Highlight",
      techStack: ["Go Lang", "DynamoDB", "AWS Lambda"],
      description: "Brings my random kindle highlights daily into my inbox",
      link: {
        href: "https://github.com/aanurraj/daily-kindle-email",
      },
    },
  ],
  work: [
    {
      company: "Infosys Limited",
      link: "https://www.infosys.com/",
      badges: ["Fulltime"],
      title: "Specialist Programmer L2 (not so fancy name for a SDE 2)",
      start: "2020",
      end: "Present",
      description:
        `"Engineered more than 12 enterprise level application for one of the top 3 company by market cap. Notable backend includes a critical budget allocation for new jobs created.
        Technologies Used: NodeJs, Express.js, Java Springboot, Microservices, Python, Docker, Kubernetes, AWS, SAP HANA XS Classic and Advanced`},
    {
      company: "OpenMined",
      link: "https://openmined.org",
      badges: ["Open Source"],
      title: "Crypto SMPC Dev",
      start: "2021",
      end: 2022,
      description:
        "Worked on OpenMined's Privacy Preserving Machine Learning (PPML) library PySyft and supporting SyMPC library. Notable cotribution includes benchmarking different SMPC function and decoupling SyMPC from PySyft.",
    },
  ],
};
