import { motion } from "framer-motion";

export const FloatingTheme = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-purple-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -100, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

// Themes


export const DarkTheme = {
  disPlayHeader: `bg-[#1E1E1E] h-20 md:h-25 flex items-center justify-between pl-5 w-full text-center shadow-md`,
  backGround: `  bg-[#1E1E1E]   text-[#fff] `,
  skillCardBg:`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-purple-500/30 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-2xl group-hover:border-purple-500/50 transition-all duration-300`
  
};

export const LightTheme = {
  disPlayHeader: `bg-[#FDF6F0] h-20 md:h-25 flex items-center justify-between pl-5 w-full text-center shadow-md`,
  backGround: `bg-[#FDF6F0] text-[#000]`,
  skillCardBg:`relative bg-gradient-to-br from-gray-100 to-gray-200 shadow-purple-500/30 backdrop-blur-md rounded-2xl p-8 border border-gray-300/50 shadow-2xl group-hover:border-purple-500/50 transition-all duration-300`
};

export const tittle = `text-2xl md:text-4xl font-bold mb-2 text-center`;
