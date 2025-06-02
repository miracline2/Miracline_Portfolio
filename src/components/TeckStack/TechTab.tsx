import { useState } from "react";
import { TabContent, tabs } from "../../common";
import { AnimatePresence, motion } from "framer-motion";



type Tab = typeof tabs[number];



const TechTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("TechSkill");


  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4">
      <div className="flex justify-center mb-4 flex-wrap gap-5">
        {tabs.map(tab => (
          <motion.button
            key={tab}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`min-w-[120px] text-center px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${activeTab === tab
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      <div className=" text-white rounded-xl p-6 shadow-md text-center">
        <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          <AnimatePresence mode="wait">
            {TabContent[activeTab].map((item: any, index: number) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex justify-center items-center"
              >
                <motion.img
                  src={item}
                  alt="Skillsimg"
                  className="w-25 h-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

      </div>
    </div>
  );
};

export default TechTabs;
