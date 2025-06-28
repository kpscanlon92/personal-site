import Hero from "../components/Hero";
import Skills from "../components/Skills";
import {projects} from "../data/projects";
import {art} from "../data/art";
import GallerySection from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
                <section className="min-h-screen snap-start">
                    <Hero />
                </section>
                <section className="snap-start">
                    <Skills />
                    <GallerySection title="Projects" items={projects} />
                    <GallerySection title="Art & Illustration" items={art} />
                    <Footer />
                </section>
            </div>
        </>
    );
}