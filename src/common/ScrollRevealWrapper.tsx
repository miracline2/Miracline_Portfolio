import { motion } from "framer-motion";

const animations = [
  { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }, 
  { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },  
  { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },  
  { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }, 
];

const ScrollRevealWrapper = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  const variant = animations[index % animations.length];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variant}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealWrapper;
