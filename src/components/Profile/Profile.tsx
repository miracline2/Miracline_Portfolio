
import profile from '../../assets/Images/Miracline.jpg';
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <motion.div
      className="w-full  flex justify-center md:justify-start p-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] blur-sm opacity-75 group-hover:blur-md transition duration-500"></div>

        <div className="relative z-10 overflow-hidden rounded-[2rem] shadow-xl transform group-hover:scale-105 transition duration-500">
          <img
            src={profile}
            alt="Profile"
            className="w-50 h-62 md:w-100 md:h-150 object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
