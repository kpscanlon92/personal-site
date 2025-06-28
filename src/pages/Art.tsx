import { art } from "../data/art";
import Footer from "../components/Footer";
import GallerySection from "../components/Gallery";

export default function Art() {
    return (
        <>
            <GallerySection title="Art" items={art}></GallerySection>
            <Footer />
        </>
    );
}