import { projects } from "../data/projects";

export default function Projects() {
    return (
        <div className="max-w-6xl md:w-[60vw] mx-auto px-4 py-20 text-main">
            <h1 className="text-5xl font-bold text-center mb-12 font-indie-flower">Projects</h1>

            <div className="space-y-6">
                {projects.map((proj, i) => (
                    <div key={i}
                        className="border border-neutral rounded-lg shadow-sm overflow-hidden bg-white">
                        <div className="px-6 py-4">
                            <span className="text-lg font-semibold text-primary">{proj.title}</span>
                            <p className="text-sm mb-2">{proj.description}</p>
                            <div className="space-y-4">
                                {proj.image && (
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        className="border border-neutral rounded w-full object-cover"
                                    />
                                )}

                                {proj.details?.features && (
                                    <div>
                                        <h3 className="font-semibold">Features</h3>
                                        <ul className="list-disc list-inside text-sm space-y-1">
                                            {proj.details.features.map((f, j) => (
                                                <li key={j}>{f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {proj.details?.techStack && (
                                    <p className="text-sm">
                                        <strong>Tech stack:</strong> {proj.details.techStack.join(", ")}
                                    </p>
                                )}

                                <div className="flex gap-4 mt-2">
                                    {proj.github && (
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {proj.link && (
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary underline"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
