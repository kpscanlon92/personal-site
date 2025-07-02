import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export interface Me {
    firstName: string;
    lastName: string;
    intro: string;
    emoji: string;
    imageUrl?: string;
}

export const me: Me = {
    firstName: "Kelly",
    lastName: "Scanlon",
    intro: "I'm a queer, neurodivergent, computer engineer and home grown artist. My professional background " +
        "is in hardware validation, software QA, and verification. I have always had an interest " +
        "puzzles, patterns, building things, and breaking things.",
    emoji: "👋",
    imageUrl: "/profilepic.jpeg",
};

export interface SocialLink {
    name: string;
    icon: IconType;
    href: string;
}

export const socials : SocialLink[] = [
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/kelly-pearl-scanlon",
    },
    {
        name: "GitHub",
        icon: FaGithub,
        href: "https://github.com/kpscanlon92",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://www.instagram.com/kell_scan_art",
    }
];

export interface SkillCategory {
    category: string;
    description: string;
    experience: string[];
    link: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        category: "Silicon Hardware Design and Verification",
        description: "Working on a new SoC? I have experience with design and verification of new chips.",
        experience: ["Pre-silicon verification at Intel"],
        link: "/resume",
        skills: ["SoC Architecture", "Embedded C", "Verilog", "SystemVerilog", "UVM/OVM"],
    },
    {
        category: "QA & Automation",
        description: "Maybe you have a testing infrastructure that needs work, or to update automated tests.",
        experience: ["Automated tests cases for stress and stability testing at Apple", "Verification Test Plans at" +
        " Intel"],
        link: "/resume",
        skills: ["Python", "Bug Tracking", "Stress and Stability", "Concurrent Testing"],
    },
    {
        category: "Frontend Web Development",
        description: "How is the UI looking on your website? Do you want to add some new features?",
        experience: [""],
        link: "/projects",
        skills: ["React", "TypeScript", "Javascript", "Tailwind CSS", "HTML", "CSS", "Vite"],
    },
    {
        category: "Backend Web Development",
        description: "Need ways to add in database features or update the way that different parts of your website communicate with each other?",
        experience: [""],
        link: "/projects",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
        category: "Data Analysis",
        description: "Risk analysis is always a good time. I can tell you how many times a user might hit a specific problem.",
        experience: [""],
        link: "/resume",
        skills: ["Tableau", "SQL", "Microsoft SQL Server", "Splunk"],
    },
    {
        category: "Tools",
        description: "Got a lab of computers that need managing? How are you hosting your database?",
        experience: [""],
        link: "/resume",
        skills: ["Docker", "Git", "Ansible", "Render", "Netlify"],
    },
];