import "./App.css";
import Presentation from "./Components/Presentation";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Testi from "./Components/Testi";
// import Fade from "react-reveal/Fade";

const App = () => {
  return (
    <div className="app">
      <style>
        {
          "body {font-family: Gtwalsheimprotrial, sans-serif; font-size: 18px;background-color: #000000;color: #FFFFFF; "
        }
      </style>
      {/* <Fade top> */}
      {/* <motion.div> */}
      <div className="logo">
        <img src="./src/assets/dawit.png" alt="" />
      </div>
      {/* </Fade> */}
      <Presentation />
      <Skills />
      <Testi />
      <Projects />
      <div className="borderr"></div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
