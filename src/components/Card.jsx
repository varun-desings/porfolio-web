import { motion, scale } from "motion/react";


const Card = ({ style, text , image , containerRef }) => {
  return image && !text ? (
    <motion.img 
    className="absolute w-15 cursor-grab"
     src={image} 
     style={style}
     whileHover={{scale: 1.05}}
     drag
     dragConstraints = {containerRef}
     dragElastic ={1} />
  ) : (
    <motion.div
      className="absolute px-10 py-3 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm cursor-grab"
      style={style}
      whileHover={{scale: 1.05}}
      drag
      dragConstraints = {containerRef} 
      dragElastic = {1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
