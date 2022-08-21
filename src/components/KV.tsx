import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type PropsType = {
  setIsShow: (isShow: boolean) => void;
};

const KV = (props: PropsType) => {
  const [isStart, setIsStart] = useState(false);
  const controls = useAnimationControls();
  const [isOff, setIsOff] = useState(false);

  const animationEnd = () => {
    setIsStart(true);
  };
  const animationStart = () => {
    setIsStart(true);
    controls.start({
      width: "5000px",
      height: "5000px",
      opacity: "1",
      transition: { duration: 0.7, ease: "easeInOut", delay: 0.5 },
    });
  };
  const allAnimationsEnded = () => {
    props.setIsShow(true);
    setIsOff(true);
  };
  const bgAnimate = {
    hidden: {
      opacity: 0.1,
      left: "50%",
      top: "-50%",
      transform: "translate(0, -50%)",
    },
    visible: {
      opacity: 1,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className="w-full h-screen md:h-[700px] bg-white relative overflow-hidden mb-4">
      <motion.div
        className={
          isStart
            ? "w-[150vh] h-[150vh] md:w-[150vw] md:h-[150vw] rounded-full bg-gradient-to-br from-white via-sky-200 to-pink-200 absolute transition-all ease-in-out duration-700 delay-50 opacity-0"
            : "w-4 h-4 rounded-full bg-gradient-to-br from-white via-sky-200 to-pink-200 absolute"
        }
        variants={bgAnimate}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "backInOut", delay: 0.5 }}
        onAnimationComplete={animationStart}
      ></motion.div>
      <motion.div
        initial={{ width: 0, height: 0, opacity: 0 }}
        animate={controls}
        className="rounded-full bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        onAnimationComplete={animationEnd}
      ></motion.div>
      <div className="max-w-3xl w-full h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="font-mono font-extrabold absolute top-[40%] -translate-y-1/2 right-8 text-secondary drop-shadow-md text-right z-50
                        md:top-1/2
                    "
        >
          {isStart && (
            <>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  ease: "backInOut",
                  delay: 0.8,
                }}
                className="text-6xl"
              >
                Animation
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  delay: 1.4,
                  ease: "backInOut",
                }}
                className="text-8xl"
              >
                makes
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  delay: 1.7,
                  ease: "backInOut",
                }}
                className="text-6xl"
              >
                web page
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  delay: 2,
                  ease: "backInOut",
                }}
                onAnimationComplete={allAnimationsEnded}
                className="text-8xl"
              >
                FUN!
              </motion.div>
            </>
          )}
        </div>
        <motion.div
          className="absolute h-2/4 w-full max-w-lg bottom-0 left-1/2 -translate-x-1/2 z-10 md:left-0 md:-translate-x-0"
          initial={{ opacity: 0 }}
          {...(isOff && { animate: { opacity: 1 } })}
          transition={{ type: "tween", duration: 0.5, ease: "backInOut" }}
        >
          <Image
            src="/undraw_pc.svg"
            alt="image of creator"
            layout="fill"
            objectFit="contain"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default KV;
