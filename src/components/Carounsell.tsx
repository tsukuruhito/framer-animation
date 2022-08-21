import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Carousell = () => {
  const src = [
    "/carousell_1.png",
    "/carousell_2.png",
    "/carousell_3.png",
    "/carousell_1.png",
    "/carousell_2.png",
    "/carousell_3.png",
  ];
  const [[index, direction], setIndex] = useState([0, 0]);

  const changeIndex = (dir: number) => {
    if (dir < 0 && index > 0) {
      setIndex([index - 1, dir]);
    } else if (dir > 0 && index < src.length - 1) {
      setIndex([index + 1, dir]);
    } else if (dir > 0 && index === src.length - 1) {
      setIndex([0, dir]);
    } else if (dir < 0 && index === 0) {
      setIndex([src.length - 1, dir]);
    }
  };
  const variants = {
    enter: (direction: number) => {
      return {
        zIndex: 1,
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
      };
    },
  };
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="overflow-hidden relative w-full max-w-lg mx-auto">
      <div className="h-64 w-full mx-auto relative overflow-hidden flex items-center justify-center border border-slate-600">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            src={src[index]}
            key={index}
            className="w-full h-full object-contain absolute cursor-pointer"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                changeIndex(1);
              } else if (swipe > swipeConfidenceThreshold) {
                changeIndex(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>
      <div
        className="carousell_btn left-0 -scale-x-100"
        onClick={() => changeIndex(-1)}
      >
        <span className="triangle"></span>
      </div>
      <div className="carousell_btn right-0" onClick={() => changeIndex(1)}>
        <span className="triangle"></span>
      </div>
    </div>
  );
};
export default Carousell;
