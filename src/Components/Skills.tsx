import React from "react";
import Button from "./Objects/Button";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <Fade bottom>
      <div className="skills" id="skills">
        <div className="headings">
          <h5>My Skillset</h5>
          <h1>Graphic Design Web Design & User Experience</h1>
          <Button
            text="My Work"
            nav="#carusel-container"
            target={""}
            image={<div></div>}
          />
        </div>
        <div className="content">
          <p>
            I specialize in building complex web applications, leading front-end
            teams, digital product design and developing visual design systems.
            I enjoy creating effortless user experience and designing delightful
            digital products. The entire process of going from a concept to
            release and gathering user’s feedback on either client’s or my own
            products is what makes me wake up everyday! I worked with numerous
            clients from all around the world from early startups to
            well-established companies. I always seek new opportunities for
            cooperation on projects around interesting dashboards, design
            systems or landing pages. Let’s create something awesome together!
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default Skills;
