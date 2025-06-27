import { socials } from "../data/whoami";

export default function Footer() {
    return (
        <footer className="text-foreground mt-12">
            <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center gap-4">
                <div className="flex gap-6">
                    {socials.map(({ name, icon: Icon, href }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition"
                            aria-label={name}
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
                <p className="text-sm text-neutral">&copy; {new Date().getFullYear()} Kelly Scanlon</p>
            </div>
        </footer>
    );
}