import { useState } from "react";
import { me } from "../data/whoami";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger icons

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full px-4 py-4 bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <span className="font-bold text-xl font-indie-flower">
                    <span className="text-primary">{me.firstName}'s</span> portfolio
                </span>

                {/* Right: Hamburger / Nav */}
                <div className="sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Desktop nav */}
                <nav className="hidden sm:flex gap-6 font-medium text-sm">
                    <a href="/" className="hover:text-primary">Home</a>
                    <a href="/resume" className="hover:text-primary">Resume</a>
                    <a href="/projects" className="hover:text-primary">Projects</a>
                    <a href="/art" className="hover:text-primary">Art</a>
                    <a href="/contact" className="hover:text-primary">Contact</a>
                </nav>
            </div>

            {/* Mobile nav dropdown */}
            {isOpen && (
                <div className="sm:hidden mt-2 px-4 flex flex-col gap-2 text-sm">
                    <a href="/" className="hover:text-primary">Home</a>
                    <a href="/resume" className="hover:text-primary">Resume</a>
                    <a href="/projects" className="hover:text-primary">Projects</a>
                    <a href="/art" className="hover:text-primary">Art</a>
                    <a href="/contact" className="hover:text-primary">Contact</a>
                </div>
            )}
        </header>
    );
}