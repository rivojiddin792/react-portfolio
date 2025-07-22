import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".home-title");
    sr.reveal(".home-scroll", { delay: 200 });
    sr.reveal(".home-img", { origin: "right", delay: 400 });

    sr.reveal(".about-img", { delay: 500 });
    sr.reveal(".about-subtitle", { delay: 300 });
    sr.reveal(".about-profession", { delay: 400 });
    sr.reveal(".about-text", { delay: 500 });
    sr.reveal(".about-social-icon", { delay: 600, interval: 200 });

    sr.reveal(".skills-subtitle");
    sr.reveal(".skills-name", { distance: "20px", delay: 50, interval: 100 });
    sr.reveal(".skills-img", { delay: 400 });

    sr.reveal(".portfolio-img", { interval: 200 });

    sr.reveal(".contact-subtitle");
    sr.reveal(".contact-text", { interval: 200 });
    sr.reveal(".contact-input", { delay: 400 });
    sr.reveal(".contact-button", { delay: 600 });
  }, []);

  return (
    <>
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
