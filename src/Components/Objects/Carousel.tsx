import React, { useState } from "react";
import Button from "./Button";
// import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

const Carousel = () => {
  const carouselData = [
    ["./src/assets/no.jpg", "./src/assets/no.jpg", "./src/assets/no.jpg"],
    ["./src/assets/no2.webp", "./src/assets/no2.webp", "./src/assets/no2.webp"],
  ];

  const [currentCarousel, setCurrentCarousel] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentCarousel((prev) =>
        prev === 0 ? carouselData.length - 1 : prev - 1
      );
      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentCarousel((prev) =>
        prev === carouselData.length - 1 ? 0 : prev + 1
      );
      setTimeout(() => setIsAnimating(false), 200);
    }
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const renderCarousel = (): JSX.Element => {
    const images = carouselData[currentCarousel];
    const carouselClass = isAnimating ? "carusel animating" : "carusel";

    return (
      <div className={carouselClass}>
        <div className="carusel-item">
          <img src={images[0]} alt="Image 1" className="carusel-item-img" />
        </div>
        <div className="box">
          <div className="carusel-item">
            <img src={images[1]} alt="Image 2" className="carusel-item-img" />
          </div>
          <div className="carusel-item">
            <img src={images[2]} alt="Image 3" className="carusel-item-img" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="carusel-container" id="carusel-container">
      <div className="headings">
        <h1>Recent</h1>
        <h1>
          Projects <span>+</span>
        </h1>
      </div>
      <div className="portfolio">
        <Button
          text={"My Behance"}
          nav={""}
          target={"_blank"}
          image={<img alt="" src={"./src/assets/behance.png"} />}
        />
      </div>
      {/* <Fade right duration={800}> */}
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 1000 }}
        transition={{ duration: 1 }}
      >
        {renderCarousel()}
      </motion.div>
      {/* </Fade> */}
      <button className="carusel-control-prev" onClick={handlePrevClick}>
        <img
          src="./src/assets/arrow.png"
          alt=""
          style={{ transform: "scale(-1)" }}
        />
      </button>
      <button className="carusel-control-next" onClick={handleNextClick}>
        <img src="./src/assets/arrow.png" alt="" />
      </button>
    </div>
  );
};

export default Carousel;
