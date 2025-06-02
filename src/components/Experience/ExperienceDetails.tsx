import { motion } from "framer-motion";
import { experiences } from "../../common";
import { tittle } from "../../styles/Styles";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const ExperienceDetails = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <h2  className={`${tittle}`}>My Experience</h2>

      <div className="flex flex-col gap-10 md:gap-16">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            className=" rounded-xl shadow-lg p-6 md:p-10 border-l-4 border-purple-600 shadow-purple-500/30 relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <div className="absolute -left-2 top-6 w-4 h-4 bg-purple-600 rounded-full hidden md:block" />

            <h3 className="text-lg md:text-2xl font-bold text-purple-600">{item.title}</h3>
            <p className="text-sm md:text-base font-semibold text-gray-500">{item.companyName}</p>
            <p className="text-xs md:text-sm italic text-gray-400">{item.year}</p>

            <ul className="list-disc ml-5 mt-4 text-[10px] md:text-base  space-y-2">
              {item.description.split(',').map((line, idx) => (
                <li key={idx}>{line.trim()}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {item.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-800 text-xs md:text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceDetails;
