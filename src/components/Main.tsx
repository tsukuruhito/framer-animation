import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Tab from "./Tab";
import Carousell from "./Carounsell";
const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "100px",
  });
  return (
    <main className="container mb-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1, margin: "50px" }}
        className="my-16"
      >
        <h2 className="heading-primary">What&apos;s this page</h2>
        <div className="grid grid-cols-1">
          <div className="font-sans text-base leading-normal">
            <p>I wanna practice animation!</p>
            <p>
              Also, Framer motion because I practice to create web pages with
              Next.js.
            </p>
            <p>So, I have decided to place my production on this page.</p>
            <p>I hope you enjoy this page!</p>
          </div>
          <div className="w-64 h-64 relative mx-auto">
            <Image
              src="/undraw_react.svg"
              alt="react"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1, margin: "50px" }}
        className="mb-16"
      >
        <h2 className="heading-primary">Tabs</h2>
        <div className="grid grid-cols-1 p-4 box-border">
          <Tab />
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1, margin: "50px" }}
        className="mb-16"
      >
        <h2 className="heading-primary">Carousell</h2>
        <div className="grid grid-cols-1">
          <Carousell />
        </div>
      </motion.div>
    </main>
  );
};

export default Main;
