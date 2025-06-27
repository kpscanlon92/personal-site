export interface GalleryItem {
    title: string;
    imageUrl?: string;
    description?: string;
    link?: string;
}

interface GallerySectionProps {
    title: string;
    items: GalleryItem[];
    bgColor?: string;
}

export default function GallerySection({
                                           title,
                                           items,
                                       }: GallerySectionProps) {
    return (
        <section className="py-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-12 font-indie-flower">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="rounded-xl overflow-hidden shadow-md bg-white transition hover:shadow-lg"
                    >
                        {item.imageUrl && (
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-64 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h3 className="text-primary text-xl font-semibold">{item.title}</h3>
                            {item.description && (
                                <p className="text-sm mt-1">{item.description}</p>
                            )}
                            {item.link && (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary text-sm mt-2 inline-block hover:underline"
                                >
                                    View →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}