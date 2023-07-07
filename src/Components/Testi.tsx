import React from "react";
import Fade from "react-reveal/Fade";

const Testi = () => {
  return (
    <div className="testi">
      <h5>Testimonials</h5>
      <div className="container">
        <Fade left duration={800}>
          <div className="box">
            <a href="http://dowody.github.io/davinci" target="_blank">
              Leonardo Da Vinci
            </a>
            <img
              src="./src/assets/quotes.png"
              alt=""
              style={{ transform: "scaleY(-1) scaleX(-1)" }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              maxime, obcaecati minus adipisci fugit voluptatum aliquid.
              Asperiores exercitation aperiam ab, is iste laudantium totam eum
              fugiat non.
            </p>
            <div className="person">
              <p className="name">Natalia</p>
              <p className="description">Maths Teacher</p>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={800}>
          <div className="box">
            <a href="https://dowody.github.io/MOLDCARGOTRANS/" target="_blank">
              Moldcargo-Trans
            </a>
            <img
              src="./src/assets/quotes.png"
              alt=""
              style={{ transform: "scaleY(-1) scaleX(-1)" }}
            />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              maxime, obcaecati minus adipisci fugit voluptatum aliquid.
              Asperiores
            </p>
            <div className="person">
              <p className="name">Andrei</p>
              <p className="description">Moldcargo-Trans Founder </p>
            </div>
          </div>
        </Fade>
        <Fade right duration={800}>
          <div className="box">
            <a
              href="https://dowody.github.io/elenamakayla.github.io/"
              target="_blank"
            >
              Elena Makayla
            </a>
            <img
              src="./src/assets/quotes.png"
              alt=""
              style={{ transform: "scaleY(-1) scaleX(-1)" }}
            />
            <p>
              obcaecati minus adipisci fugit voluptatum aliquid. Asperiores
              exercitationem mollitia, sunt aperiam ab, sint quis iste
              laudantium totam eum fugiat non.
            </p>
            <div className="person">
              <p className="name">Elena Makayla</p>
              <p className="description">Microsoft Project Manager</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Testi;
