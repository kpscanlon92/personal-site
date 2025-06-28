import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Header from "./components/Header";

function App() {
    return (
        <section className="card flex flex-col min-h-screen">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/art" element={<Art />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                </Routes>
            </Router>
        </section>
    );
}

export default App;
