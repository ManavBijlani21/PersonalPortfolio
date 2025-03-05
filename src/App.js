import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <About/>
    <Experiences/>
    <Skills/>
    <Projects/>
    <Contact/>
    <SocialLinks/>
    </div>
  );
}

export default App;
