import "./App.css";
import Header from "./Components/Header.js/Header";
import world from "./img/world.png";
//import Image from './Components/Image/Image';
import blur from "./img/blur.png";
import planet from "./img/planet on top.png";
import AboutMe from "./Components/AboutMe/AboutMe";
import Button from "./Components/Button/Button";
import ProjectBG from "./img/Projects.png" 

function App() {
  return (
    <div className="site">
      <img className="planet" src={planet} alt={"planet"} />
      <img className="blur" src={blur} alt={"blur"} />
      {/* <Image className="planet" src={planet} alt={"planet"}/> */}
      <Header />
      <div className="App">
        {/* <Image className="world" src={world} alt={"myworld"}/> */}
        {/* <Welcome className="welcome"/> */}
        <img className="world" src={world} alt={"myworld"} />
        <AboutMe />
        <Button className="cv" />
        <img src={ProjectBG} alt={"projects"}/>
      </div>
    </div>
  );
}

export default App;
