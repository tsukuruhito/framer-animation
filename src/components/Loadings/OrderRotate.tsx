import { motion } from "framer-motion";
import { useState } from "react";

const OrderRotate = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setTimeout(() => {
      if (count < 2) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 500);
  };
  return (
    <div className="flex items-center gap-2 justify-between">
      <motion.div
        className="w-6 h-6 rounded-lg bg-slate-200"
        animate={
          count === 0
            ? {
                rotate: 180,
                filter: "brightness(0.5)",
                transition: { duration: 0.3 },
              }
            : { rotate: 0, filter: "brightness(1)" }
        }
        onAnimationComplete={countUp}
      />
      <motion.div
        className="w-6 h-6 rounded-lg bg-slate-200"
        animate={
          count === 1
            ? {
                rotate: 180,
                filter: "brightness(0.5)",
                transition: { duration: 0.3 },
              }
            : { rotate: 0, filter: "brightness(1)" }
        }
        onAnimationComplete={countUp}
      />
      <motion.div
        className="w-6 h-6 rounded-lg bg-slate-200"
        animate={
          count === 2
            ? {
                rotate: 180,
                filter: "brightness(0.5)",
                transition: { duration: 0.3 },
              }
            : { rotate: 0, filter: "brightness(1)" }
        }
        onAnimationComplete={countUp}
      />
    </div>
  );
};

export default OrderRotate;
