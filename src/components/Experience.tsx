import { experience } from "../data/experience";

export default function Experience() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-20 text-main">
            <h2 className="text-4xl font-bold mb-8 text-center font-indie-flower">Professional Experience</h2>

            <div className="space-y-12">
                {experience.map((exp, idx) => (
                    <div key={idx}>
                        <div className="flex items-baseline justify-between">
                            <h3 className="text-2xl font-semibold text-primary">{exp.role}</h3>
                            <span className="text-sm text-neutral text-primary">{exp.period}</span>
                        </div>
                        <p className="italic text-primary mb-2">{exp.company}</p>
                        <ul className="list-disc list-inside space-y-1">
                            {exp.points.map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
