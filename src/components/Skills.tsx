import { skills } from "../data/whoami";

export default function Skills() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-20 text-main">
            <h2 className="text-4xl font-bold text-center mb-12 font-indie-flower">Do you want to work with me?</h2>

            <div className="grid grid-cols-1 gap-8">
                {skills.map((group, i) => (
                    <div key={i}>
                        <h3 className="text-2xl font-semibold text-primary mb-1">{group.category}</h3>
                        <p className="text-m font-semibold mb-4">{group.description}</p>
                        <ul className="flex flex-wrap gap-2">
                            {group.skills.map((skill, j) => (
                                <li
                                    key={j}
                                    className="bg-gray-100  text-sm px-3 py-1 rounded-full shadow-sm"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}