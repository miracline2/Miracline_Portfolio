import { motion } from "framer-motion"

interface Iskills{
    item:any;
    index:number
}


const SkillsData = ({item,index}:Iskills) => {
  return (
    <div>
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
                  alt="Skills-img"
                  className="w-12 h-auto md:w-25"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.li>
    </div>
  )
}

export default SkillsData
