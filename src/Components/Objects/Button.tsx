import React from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  nav: string;
  target: string;
  image: JSX.Element;
}

const Button = ({ text, nav, target, image }: Props) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.25, delay: 1.5 }}
    >
      <form action={nav + ""} target={target}>
        <button className={"btn"}>
          {text} {image}
        </button>
      </form>
    </motion.div>
  );
};

export default Button;
