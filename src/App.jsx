import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import AOS from "aos";
import { AiOutlineArrowUp } from "react-icons/ai";

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
      <Toaster position="top-center" />
      {showScrollButton && (
        <div
          id="scrollToTop"
          onClick={scrollToTop}
          title="Scroll To Top"
        >
          <AiOutlineArrowUp  />
        </div>
      )}
    </div>
  );
};

export default App;
