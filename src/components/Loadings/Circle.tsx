import { motion } from "framer-motion";
import { useState } from "react";

const CirclePaht = () => {
  const [num, setNum] = useState(5);
  return (
    <div className="h-12 w-12 rounded-full relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="h-12 w-12 relative"
      >
        <motion.circle
          cx="24"
          cy="24"
          r="22"
          fill="transparent"
          stroke="#666666"
          strokeWidth="1px"
        />
        <motion.circle
          cx="24"
          cy="24"
          r="18"
          fill="transparent"
          stroke="#666666"
          strokeWidth="1px"
          strokeLinecap="round"
          initial={{ pathLength: 0.2 }}
          animate={{
            rotate: 360,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            },
          }}
        />
        <motion.circle
          cx="24"
          cy="24"
          r="14"
          fill="transparent"
          stroke="#666666"
          strokeWidth="1px"
          strokeLinecap="round"
          initial={{ pathLength: 0.2 }}
          animate={{
            rotate: 360,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            },
          }}
        />
        <motion.circle
          cx="24"
          cy="24"
          r="10"
          fill="transparent"
          stroke="#666666"
          strokeWidth="1px"
          strokeLinecap="round"
          initial={{ pathLength: 0.2 }}
          animate={{
            rotate: 360,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            },
          }}
        />
        <motion.circle
          cx="24"
          cy="24"
          r="6"
          fill="transparent"
          stroke="#666666"
          strokeWidth="1px"
          strokeLinecap="round"
          initial={{ pathLength: 1 }}
          style={{ scale: -1 }}
          animate={{
            rotate: 360,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0,
              ease: "linear",
            },
          }}
        />
      </svg>
    </div>
  );
};

export default CirclePaht;
