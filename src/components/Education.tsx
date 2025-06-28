import { education } from "../data/whoami";

export default function Education() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-20 text-main">
            <h2 className="text-4xl font-bold text-center mb-12 font-indie-flower">Education</h2>
            <div className="space-y-10">
                {education.map((ed, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h3 className="text-2xl font-semibold text-primary">{ed.school}</h3>
                            <span className="text-sm text-neutral text-primary">{ed.period}</span>
                        </div>
                        <p className="italic">
                            {ed.degree} in {ed.field}
                        </p>
                        {ed.details && (
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                {ed.details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}