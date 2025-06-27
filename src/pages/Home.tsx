import Hero from "../components/Hero";
import Skills from "../components/Skills.tsx";
import Experience from "../components/Experience.tsx";
import {projects} from "../data/projects.ts";
import {art} from "../data/art.ts";
import GallerySection from "../components/Gallery.tsx";

export default function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <Experience />
            <GallerySection title="Projects" items={projects} />
            <GallerySection title="Art & Illustration" items={art} />
        </>
    );
}