export interface Project {
    title: string;
    description: string;
    image?: string;
    link?: string;
    github?: string;
    details?: {
        motivation?: string;
        techStack?: string[];
        challenges?: string[];
        outcome?: string;
        features?: string[];
    };
}

export const projects: Project[] = [
    {
        title: "Moods App",
        description: "A full stack mood tracking questionaire with historical data.",
        image: "",
        link: "https://moods-frontend.onrender.com/pages/login",
        github: "https://github.com/kpscanlon92/moods",
        details: {
            motivation: "To help users reflect on emotional patterns over time.",
            techStack: ["Node.js", "Express", "MongoDB", "React", "Vite"],
            features: [
                "Frontend UI pages: Login, Home, Questions, History, Settings.",
                "Frontend UI consistency with style, header, and footer.",
                "Backend log in system using JWT tokens to handle multi-user data.",
                "Backend database updates to handle additions/updates/delete for account data.",
                "Backend MongoDB instances to hold profile data and question history.",
                "Deployed using Render.com for both frontend and backend."
            ],
            challenges: [
                "Designing flexible mood schema",
                "Handling multi-user data securely",
            ],
            outcome: "Successfully used by beta testers with positive feedback."
        }
    },
    {
        title: "Therapy Squarespace Site",
        description: "Profile Website for a therapist",
        link: "https://www.therapywithdayna.com/client-cost",
        details: {
            techStack: ["Squarespace", "Javascript"],
            features: [
                "Migrated basic profile website from Wix to Squarespace.",
                "Updated site style.",
                "Added in client cost estimation calculator with Javascript.",
                "Ported over with no downtime on the same domain."
            ],
        }
    },
    {
        title: "Portfolio Website",
        description: "This very site!",
        github: "https://github.com/kpscanlon92/personal-site",
        details: {
            techStack: ["React", "Vite", "Tailwind"],
            features: [
                "Styling done with Tailwind to keep colors, fonts, and design consistent",
                "Digital Resume",
                "Side projects with explanations and links",
                "Personal Art portfolio",
                "Contact page with form to email me directly",
                "This page is open source with personal data in the /data folder"
            ],
        }
    },
];