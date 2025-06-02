import { About } from "../../common";
import { motion } from "framer-motion";

const ProfileDetails = () => {
  return (
    <motion.div
      className="text-center  flex flex-col justify-center "
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-xl md:text-3xl text-center md:mt-[8em] font-bold mb-2 ">Hi, This is Miracline A</h1>
      <h2 className="text-sm md:text-xl text-gray-500">{About}</h2>
    </motion.div>
  );
};

export default ProfileDetails;
