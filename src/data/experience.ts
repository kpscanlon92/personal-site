
export interface EducationEntry {
    school: string;
    degree: string;
    field: string;
    period: string;
    details?: string[];
}

export const education: EducationEntry[] = [
    {
        school: "University of California, Santa Cruz",
        degree: "Bachelor of Science",
        field: "Computer Engineering",
        period: "2010 – 2014",
        details: [
            "Focus on digital design, embedded systems, and software development",
            "Senior capstone in system-level hardware/software integration",
        ],
    },
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