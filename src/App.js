import "./App.css";
import Header from "./Components/Header/Header.jsx";
import world from "./img/world.png";
//import Image from './Components/Image/Image';
import blur from "./img/blur.png";
import planet from "./img/planet on top.png";
import AboutMe from "./Components/AboutMe/AboutMe";
import Button from "./Components/Button/Button";
import ProjectBG from "./img/Projects.png";
import Skills from "./Components/Skills/Skills";
// import ProjectSwiper from "./Components/ProjectsSwiper/ProjectsSwiper";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="App">
      <Header />
      <img className="planet" src={planet} alt={"planet"} />
      <img className="blur" src={blur} alt={"blur"} />
      {/* <Image className="planet" src={planet} alt={"planet"}/> */}
      {/* <Image className="world" src={world} alt={"myworld"}/> */}
      {/* <Welcome className="welcome"/> */}
      <img className="world" src={world} alt={"myworld"} />
      <AboutMe />
      <Button className="cv" />
      <Title title="Projects"></Title>
      <img className="projects" src={ProjectBG} alt={"projects"} />
      
      {/* <ProjectSwiper className="mySwiper"/> */}
      <Skills />
    </div>
  );
}

export default App;
