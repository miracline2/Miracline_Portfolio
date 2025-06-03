import { motion } from "framer-motion"
import { skills } from "../../common"
import { useContext } from "react";
import { ThemeContext } from "../../contextAPI/ThemeContext";
import { DarkTheme, LightTheme } from "../../styles/Styles";

const SkillsDeskVer = () => {
     const { theme } = useContext(ThemeContext);
    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const skillVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            rotateX: -90
        },
        visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    }

    // Skill names mapping (you can customize these based on your actual skills)
    const skillNames = [
        "React", "Redux", "TypeScript", "JavaScript",
        "HTML5", "CSS3", "Node.js", "Tailwind","npm","GitHub","Azure Devops","VS Code"
    ]

    return (
        <div className="w-full h-screen relative">
           

            <div className="relative z-10 p-5 h-full flex flex-col">
                {/* Enhanced Header */}
         
                {/* Skills Grid */}
                <motion.div 
                    className=" grid grid-cols-2 md:grid-cols-6 gap-9 place-items-center max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={skillVariants}
                            className="group relative"
                            whileHover={{ 
                                scale: 1.1,
                                rotateY: 15,
                                z: 50
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {/* Skill Card */}
                            <div className={`${theme==='Dark'?
                                    DarkTheme.skillCardBg:LightTheme.skillCardBg
                                }`}>
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                                
                                {/* Skill Icon */}
                                <div className="relative z-10 flex flex-col items-center">
                                    <motion.img
                                        src={skill}
                                        alt={`${skillNames[index] || 'Skill'}`}
                                        className="w-16 h-16 mb-4 filter drop-shadow-lg"
                                        whileHover={{ 
                                            rotateY: 180,
                                            scale: 1.1
                                        }}
                                        transition={{ 
                                            type: "spring", 
                                            stiffness: 300,
                                            damping: 10
                                        }}
                                    />
                                    
                                    {/* Skill Name */}
                                    <motion.h3 
                                        className=" font-semibold text-center group-hover:text-purple-300 transition-colors duration-300"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {skillNames[index] || `Skill ${index + 1}`}
                                    </motion.h3>
                                </div>

                                {/* Hover overlay */}
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{ scale: 1 }}
                                />
                            </div>

                            {/* Floating skill level indicator */}
                            <motion.div
                                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                initial={{ scale: 0, rotate: -180 }}
                                whileHover={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                ★
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom decoration */}
                <motion.div 
                    className="mt-5 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="flex space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 bg-purple-400 rounded-full"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default SkillsDeskVer