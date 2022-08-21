import { motion } from "framer-motion";

const Wave = () => {
  const circle = {
    scale: [0, 1, 1.3],
    opacity: [0.2, 0.7, 0],
    transition: { duration: 1.5, ease: "linear", repeat: Infinity },
    filter: ["blur(0px)", "blur(3px)", "blur(5px)"],
  };
  return (
    <div className="h-12 w-12 relative">
      <motion.div
        className="h-12 w-12 rounded-full border-4 box-border border-cyan-500/80 absolute"
        animate={circle}
      ></motion.div>
      <motion.div
        className="h-12 w-12 rounded-full border-4 box-border border-lime-300/80 absolute"
        animate={circle}
      ></motion.div>
    </div>
  );
};
export default Wave;
