import { motion, useMotionValue, useTime, useTransform } from "framer-motion";

const BoxRotate = () => {
  const x = useMotionValue(0);
  const time = useTime();
  const rotate = useTransform(time, [0, 2500], [0, 360], { clamp: false });
  return (
    <div className="w-12 h-12 relative">
      <motion.div
        className="w-6 h-6 bg-zinc-300 absolute"
        style={{ rotate }}
      ></motion.div>
      <motion.div
        className="w-8 h-8 border border-spacing-2 border-double border-zinc-400 absolute bottom-0 right-0"
        style={{ rotate: rotate }}
      ></motion.div>
    </div>
  );
};

export default BoxRotate;
