import { FlipText } from "./FlipText";
import {motion} from "motion/react";

const HeroText = () => {
  const varients = {
    hidden: { opacity: 0 , x: -50},
    visible: {opacity:1 , x: 0}
  }
  return (
    <>
    <div className="z-10 mt-20 text-center md:text-left 
    rounded-3xl bg-clip-text">

      {/*Deckstop view */}
       <div className="flex-col hidden md:flex c-space ">
         <motion.h1 className="text-4xl font-medium"
         variants={varients}
         initial="hidden"
         animate="visible"
         transition={{delay: 1}}
         >Hi I'am Varun</motion.h1>
         <div className="flex flex-col items-start">
           <motion.p className="text-5xl font-medium 
           text-neutral-300"
           variants={varients}
           initial="hidden"
           animate="visible"
           transition={{delay: 1.2}}
          >
            A Developer <br /> who provides value not <br /> only websites
            </motion.p>
           
            <motion.div>
              <FlipText words={["Secure" , "Modern" , "scalable"]}/>
            </motion.div>

            <motion.p className="text-4xl font-medium
            text-neutral-300"
            variants={varients}
            initial="hidden"
            animate="visible"
            transition={{delay: 1.4}}
            >Web solutions</motion.p>
         </div>
       </div>
       
    </div>

    {/* mobile view*/}

    <div className="flex flex-col space-y-6 md:hidden text-center">
     <motion.p className="text-2xl font-medium mt-25"
     variants={varients}
     initial="hidden"
     animate="visible"
     transition={{delay: 1}}
     >Hi, i am Varun</motion.p>
     <div>
      <motion.p className="text-3xl font-black
      text-neutral-300 mb-2.5"
      variants={varients}
      initial="hidden"
      animate="visible"
      transition={{delay: 1.2}}>
      A dev who delivers value <br /> not websites
      </motion.p>
      <motion.div>
        <FlipText
        words={["Secure" , "Modern" , "scalable"]}
        className="font-bold text-white text-5xl"
        variants={varients}
         initial="hidden"
         animate="visible"
         transition={{delay: 1.4}}
        />
      </motion.div>
      <motion.p className="text-2xl font-black
      text-neutral-300"
      variants={varients}
         initial="hidden"
         animate="visible"
         transition={{delay: 1.6}}
      >
        Web Applications
      </motion.p>
     </div>
    </div>
    </>
  )
}

export default HeroText
