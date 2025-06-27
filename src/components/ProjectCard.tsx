import type { GalleryItem } from "./Gallery";

export default function ProjectCard({ title, description, link }: GalleryItem) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-6 transition hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-gray-600 mt-2 mb-4">{description}</p>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                >
                    View Project →
                </a>
            )}
        </div>
    );
}