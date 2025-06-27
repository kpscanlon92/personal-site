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
    intro: "I'm a queer, neurodivergent computer engineer and home grown artist. My professional background " +
        "is in hardware validation, software QA, and verification. I have always had an interest " +
        "puzzles, patterns, and building things.",
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

export interface Experience {
    company: string;
    role: string;
    period: string;
    points: string[];
}

export const experience: Experience[] = [
    {
        company: "Apple",
        role: "Hardware Validation Engineer",
        period: "July 2019 - July 2024",
        points: [
            "Validated the next generation of Mac Computers and iPads, by running concurrent software based stress" +
            " testing on racks of hundreds of post silicon prototypes throughout the development product cycle.",
            "Developed python based tests, based on hardware components, to ensure the tests stress the latest silicon changes.",
            "Debugged critical issues by triaging and analyzing output logs then creating software condensed results" +
            " using python, mySQL databases, and Tableau to report information to both hardware and software cross functional teams.",
            "Worked to improve our understanding about how our test workloads affect system wired memory and program" +
            " erase cycles on our devices under test in order to make sure our test use cases were creating valid" +
            " issues.",
            "Analyzed media and graphics workload outputs by gathering data during testing then learning and using" +
            " Tableau to plot and correspond time data vs. workload data to understand and characterized test cases."
        ],
    },
    {
        company: "Apple",
        role: "Software QA Engineer",
        period: "July 2016 - July 2019",
        points: [
            "Tested the current and next generation iPhone, iPad, and Watch by running software based stress and stability testing.",
            "Updated python based test environment to add new automated tests based on new features in the latest hardware.",
            "Work cross-functionally with other QA teams, developers, and project managers to debug issues.",
            "Analyzed test output to creating python based reports from log processing and bug generation/analysis."
        ],
    },
    {
        company: "Intel",
        role: "Pre-Silicon Verification Engineer",
        period: "Sept 2014 - July 2016",
        points: [
            "Worked on the development and validation of ethernet switch chips as a part of the Switch Silicon Engineering Organization.",
            "Developed Pre-Silicon functional validation tests to verify a system will meet architecture and design requirements.",
            "Documented failures in a bug tracking database and drove them to closure.",
            "Developed test-plans, test-benches, Bus Functional Models, checkers, trackers, scoreboards and" +
            " functional coverage.",
            "Worked closely with design engineers, micro-architects, and other team members to create high quality" +
            " test-plans, verification environments and tests."
        ],
    },
];

export interface SkillCategory {
    category: string;
    description: string;
    skills: string[];
}

export const skills: SkillCategory[] = [
    {
        category: "Silicon Hardware Design and Verification",
        description: "Working on a new SoC? I have experience with design and verification of new chips.",
        skills: ["SoC Architecture", "Embedded C", "Verilog", "SystemVerilog", "UVM/OVM"],
    },
    {
        category: "QA & Automation",
        description: "Maybe you have a testing infrastructure that needs work, or to update automated tests.",
        skills: ["Python", "Bug Tracking", "Stress and Stability", "Concurrent Testing"],
    },
    {
        category: "Frontend Web Dev",
        description: "How is the UI looking on your website? Do you want to add some new features?",
        skills: ["React", "TypeScript", "Javascript", "Tailwind CSS", "HTML", "CSS", "Vite"],
    },
    {
        category: "Backend Web Dev",
        description: "Need ways to add in database features or update the way that different parts of your website communicate with each other?",
        skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
        category: "Data Analysis",
        description: "Risk analysis is always a good time. I can tell you how many times a user might hit a specific problem.",
        skills: ["Tableau", "SQL", "Microsoft SQL Server", "Splunk"],
    },
    {
        category: "Tools",
        description: "Got a lab of computers that need managing? How are you hosting your database?",
        skills: ["Docker", "Git", "Ansible", "Render", "Netlify"],
    },
];