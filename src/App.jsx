import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar.jsx";
import { Home } from "./components/Home";
import Contacts from "./components/Contacts";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services"
import Projects from "./components/Projects"
import Footer from "./components/Footer";
// import Particles from "react-tsparticles";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <Services />
      <Projects/>
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
