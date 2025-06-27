import { me } from "../data/whoami";

export default function Hero() {
    return (
        <section className="p-4 md:h-[50vh] mx-auto md:w-[80vw] max-w-5xl content-center">
            <div className="md:flex md:flex-row gap-6 justify-items-center">
                <div className="flex-none content-center">
                    {me.imageUrl && (
                        <img
                            src={me.imageUrl}
                            alt={`${me.firstName} ${me.lastName}`}
                            className="w-50 h-50 rounded-full shadow-lg object-cover"
                        />
                    )}
                </div>
                <div className="content-center text-center md:text-left">
                    <h1 className="text-5xl font-bold mb-4 font-indie-flower">
                        Hi, my name is <a className="text-primary"> {me.firstName} </a>{me.emoji}
                    </h1>
                    <p className="text-xl">
                        {me.intro}
                    </p>
                </div>
            </div>
        </section>
    );
}