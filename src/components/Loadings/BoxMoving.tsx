import { motion } from "framer-motion";
import { useState } from "react";

const BoxMoving = () => {
  const size = 50;

  const moving = {
    initial: {
      x: 0,
      y: 0,
    },
    animate: {
      x: [0, size / 2, size / 2, 0, 0],
      y: [0, 0, size / 2, size / 2, 0],
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  const moving2 = {
    initial: {
      x: size / 2,
      y: size / 2,
    },
    animate: {
      x: [size / 2, 0, 0, size / 2, size / 2],
      y: [size / 2, size / 2, 0, 0, size / 2],
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <motion.div
        className="bg-zinc-300 absolute"
        style={{ width: size / 2, height: size / 2 }}
        initial={"initial"}
        animate={"animate"}
        variants={moving}
      ></motion.div>
      <motion.div
        className="bg-zinc-300 absolute"
        style={{ width: size / 2, height: size / 2 }}
        initial={"initial"}
        animate={"animate"}
        variants={moving2}
      ></motion.div>
    </div>
  );
};

export default BoxMoving;
