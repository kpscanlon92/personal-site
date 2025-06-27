import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <section className="card flex flex-col min-h-screen">
            <Router>
                <Header />
                <section className="grow">  {/* Allows mid section to fill in if it doesn't fill the scrren */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/thank-you" element={<ThankYou />} />
                    </Routes>
                </section>
                <Footer></Footer>
            </Router>
        </section>
    );
}

export default App;
