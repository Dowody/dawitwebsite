import React from "react";
import Fade from "react-reveal/Fade";
import Button from "./Objects/Button";

const Contact = () => {
  return (
    <Fade bottom duration={800}>
      <div className="contact">
        <div className="headings">
          <h5>Whats Next</h5>
          <h1>Let's work together.</h1>
          <p>
            If you'd like to talk about a project you want help with or need an
            advice about product design, just drop me a message at
            <span> dowody2006@gmail.com </span> I'm currently Available for any
            design systems projects, dashboard designs or landing pages gigs.
          </p>
          <Button
            text={"Write me an email"}
            nav={"mailto:email@example.com"}
            target={"_blank"}
            image={<img alt="" src={"./src/assets/email.png"} />}
          />
        </div>
      </div>
    </Fade>
  );
};

export default Contact;
