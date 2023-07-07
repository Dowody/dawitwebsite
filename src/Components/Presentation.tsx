import Button from "./Objects/Button";
import { motion } from "framer-motion";

const Presentation = () => {
  return (
    <div className="presentation">
      <div className="content">
        <h3>Hello, it's me</h3>
        <h2>Designer Developer</h2>
        <h1>
          Dawit <span>.</span>
        </h1>
        <p>
          An enthusiastic product designer currently shaping the future of
          software development by designing smooth user-interfaces that promote
          user interaction with information and data. While traveling around the
          world.
        </p>
        <Button
          text="Scroll for more"
          nav="#skills"
          target={""}
          image={<div></div>}
        />
      </div>
      <div className="image">
        <img src="./src/assets/person.png" alt="" />
      </div>
    </div>
  );
};

export default Presentation;
