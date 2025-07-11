import { artData } from "../data/art";

function Art() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-10 text-main">
            <h2 className="text-4xl font-bold text-center mb-12 font-indie-flower">Art Portfolio</h2>
            <div className="p-4 space-y-12">
                {Object.entries(artData).map(([seriesName, { description, pieces }]) => (
                    <section key={seriesName}>
                        <h3 className="text-3xl font-semibold text-primary">{seriesName}</h3>
                        <p className="mb-4">{description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
                            {pieces.map((piece) => (
                                <div className="aspect-w-1 aspect-h-1 w-full mb-10">
                                    <img
                                        src={piece.image}
                                        alt={piece.title}
                                        className="object-cover w-full h-full rounded"
                                    />
                                    <h3 className="text-xl mt-2">{piece.title}</h3>
                                    <p className="text-sm">{piece.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
}

export default Art;