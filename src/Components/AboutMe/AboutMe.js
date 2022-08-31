import React from "react";
import aboutme from "../../img/about.png";

function AboutMe() {
  const textAboutMe =
  "I'm Maria, a Junior Full-Stack Developer passionate about technology, learning, and cultures. I love new challenges and I’m always pushing myself to get new knowledges, I’ve already learned 5 languages and decided to learn technology languages entering in the bootcamp School of Code.  My background in Architecture helps me to solve problems with creative solutions and with nice designs. As a Project Manager, improved motivation on teams and helped them to be more organized, prioritize tasks and worked with the agile methodologies adapting MVPs and schedules. "
    //"My name is Maria Roberta, I’m brazilian living in the UK for 5 years. Before coding I used to work as Architect and Project Manager. I’m always focusing on achieve my goals and I’ve learned 4 leanguages to be able to live in different countries. I was always in love with technology, and I believe the future is tech. So I decided to change my carrer to follow one of my dreams. Now as a Junior full stack developer, I’m looking for learning and improve even more my skills in code, bringing with me all the creative part of architecture and management skills from my last experience. I love to be around different people, exchange knowledge and learn new cultures.";

  return (
    <div className="aboutme-session">
      <img className="aboutmeplanet" src={aboutme} alt={"aboutme"} />
      <div className="textAbout">
        <h4 contenteditable>About Me</h4>
        <p >{textAboutMe}</p>
      </div>
      
    </div>
  );
}

export default AboutMe;

{/* 

<svg viewBox="0 0 100 100">
        <circle r="48" cx="50" cy="50" />
        <foreignObject id="text" width="100" height="100">
          <div class="shape shape-left"></div>
          <div class="shape shape-right"></div>
          // <div class="text">
            //<h1 contenteditable>Flowing text inside a shape</h1>
            //<p contenteditable>
            //  This technique uses two shapes set as shape-outside to flow text
              //within a shape, mimicking the functionality of the shape-inside
              //property. It's implemented in an SVG foreignObject tag so it's
              //scalable. Edit the text and notice how it stays within its bounds.
            //</p>
          //</div> 
          <div className="text">
        <h4 contenteditable>About Me</h4>
        <p contenteditable className="p-about">{textAboutMe}</p>
      </div>
        </foreignObject>
      </svg>

       */}