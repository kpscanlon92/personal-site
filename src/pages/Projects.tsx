import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function Projects() {
    return (
        <>
            <section className="px-4 py-16 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Projects</h2>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((proj, i) => (
                        <ProjectCard key={i} {...proj} />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
}