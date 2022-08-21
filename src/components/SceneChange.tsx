import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { sceneAtom } from "../atom";

const SceneChange = () => {
  const [scene, setScene] = useAtom(sceneAtom);
  const variants = {
    initial: {
      opacity: 0,
      width: "100%",
      height: "100%",
    },
    animate: {
      clipPath: [
        "inset(0% 0% 100% 0%)",
        "inset(0% 0% 0% 0%)",
        "inset(100% 0% 0% 0%)",
      ],
      opacity: [1, 1, 1],
      transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
    },
    exit: {
      opacity: 0,
    },
  };
  const changeEnded = () => {
    setScene(false);
  };
  return (
    <motion.div
      className="
        fixed bg-gradient-to-b from-quaternary to-white z-50 pointer-events-none"
      initial={"initial"}
      animate={scene && "animate"}
      variants={variants}
      onAnimationComplete={changeEnded}
    ></motion.div>
  );
};
export default SceneChange;
