import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const Tab = () => {
  const tabs = [
    { id: "tab1", content: "Thisis content of tab1" },
    { id: "tab2", content: "Thisis content of tab2" },
    { id: "tab3", content: "Thisis content of tab3" },
  ];
  const [activeTab, setActiveTab] = useState("tab1");
  const control = useAnimationControls();
  const onTapSelect = (id: string) => {
    setActiveTab(id);
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <div className="max-w-3xl w-full mx-auto">
      <ul className="grid grid-cols-3 text-center" role="tab-list">
        {tabs.map((tab) => {
          return (
            <li
              key={tab.id}
              className="border-secondary border-solid border-2 text-white bg-secondary box-border rounded-lg border-b-0 rounded-b-none"
            >
              <motion.button
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id ? "true" : "false"}
                className={`p-2 w-full h-full relative transition-colors box-border ease-out duration-300 ${
                  activeTab === tab.id ? "bg-secondary" : "bg-primary"
                }`}
                onTap={() => onTapSelect(tab.id)}
              >
                {tab.id}
                {tab.id === activeTab ? (
                  <motion.div
                    className="w-full h-0.5 bg-quaternary absolute bottom-0 left-0"
                    layoutId="underline"
                  />
                ) : null}
              </motion.button>
            </li>
          );
        })}
      </ul>
      <div className="w-full h-40 border-secondary border-solid border-2 rounded-b-lg relative box-border bg-white">
        {tabs.map((tab) => {
          return (
            <motion.div
              key={tab.id}
              id={tab.id}
              role="tab-panel"
              aria-hidden={activeTab !== tab.id ? "true" : "false"}
              className="w-full h-full left-0 bottom-0-0 p-4 box-border absolute"
              initial="hidden"
              animate={activeTab === tab.id ? "visible" : "exit"}
              variants={variants}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p>{tab.content}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
