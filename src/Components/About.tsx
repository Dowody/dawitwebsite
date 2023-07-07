import React from "react";
import Button from "./Objects/Button";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="headings">
        <h5>About Me</h5>
        <h1>Designing with passion for Problem Solving</h1>
        <Button
          text="Follow me on instagram"
          nav="https://www.instagram.com/dowody9/"
          target={"_blank"}
          image={<img alt="" src={"./src/assets/insta.png"} />}
        />
      </div>
      <div className="content">
        <p>
          <p className="p-margin">
            I’ve always been passionate about pixels and design projects and
            haven’t stopped working and learning about new technologies . Other
            than sitting in from of my display I enjoy myself in casual sports,
            such as bowling or playing football with friends.
          </p>
          <p className="p-margin">
            I'm grateful that my job allows me to work from anywhere. I’m active
            on Instagram where I share most of the and all info about my
            upcoming projects.
          </p>
          <p className="p-margin">
            I also like sharing my experiences on instagram
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
