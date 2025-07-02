import { art } from "../data/art";
import GallerySection from "../components/Gallery";

export default function Art() {
    return (
        <>
            <GallerySection title="Art" items={art}></GallerySection>
        </>
    );
}