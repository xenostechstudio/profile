import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Workflow from "./components/Workflow";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Workflow />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
