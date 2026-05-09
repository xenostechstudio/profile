import Hero from "./components/Hero";
import Services from "./components/Services";
import Workflow from "./components/Workflow";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Workflow />
      <About />
      <Footer />
    </div>
  );
}
