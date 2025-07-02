import { socials } from "../data/whoami";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (import.meta.env.DEV) {
            e.preventDefault(); // stop native submission
            // simulate sending the form to Netlify (or pretend it was successful)
            navigate("/success");
        }
        // Otherwise, in production, let Netlify handle it normally
    };

    return (
        <>
            <section className="max-w-3xl mx-auto px-4 py-20 flex flex-col items-start gap-8 text-main">
                <h1 className="text-4xl font-bold">Get in touch</h1>

                <p className="text-lg">
                    If you want to chat, please contact me in one of the ways below!
                </p>

                <div className="mt-4 space-y-4">
                    {socials.map(({ name, icon: Icon, href }) => (
                        <div key={name} className="flex items-center gap-4">
                            <Icon size={42} className="text-primary shrink-0" />
                            <div>
                                <p className="font-semibold text-lg">{name}</p>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-m text-blue-600 hover:underline break-all"
                                >
                                    {href}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="mt-1 px-3 py-2 rounded-md w-full flex flex-col gap-4"
                    action="/thank-you"
                    onSubmit={handleSubmit}
                >
                    {/* Netlify hidden input (required) */}
                    <input type="hidden" name="form-name" value="contact" />

                    <label className="flex flex-col font-medium">
                        Your Name
                        <input
                            type="text"
                            name="name"
                            required
                            className="mt-1 px-3 py-2 border rounded-md shadow-sm bg-white"
                        />
                    </label>

                    <label className="flex flex-col font-medium">
                        Your Email
                        <input
                            type="email"
                            name="email"
                            required
                            className="mt-1 px-3 py-2 border rounded-md shadow-sm bg-white"
                        />
                    </label>

                    <label className="flex flex-col  font-medium">
                        Message
                        <textarea
                            name="message"
                            required
                            rows={5}
                            className="mt-1 px-3 py-2 border rounded-md shadow-sm bg-white"
                        />
                    </label>

                    <button
                        type="submit"
                        className="mt-4 self-start bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </>
    );
}