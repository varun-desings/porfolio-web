import { useState } from "react";
import {AnimatePresence, easeInOut, motion} from "motion/react";

const CopyEmailButton = () => {
  const [copied , setCopied] = useState(false);
  const email = "vsinghchouhan905@gmail.com";

  const copyToClipboard =() => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
       setCopied(false);
    }, 2000);
  }
  return (
    <motion.button
     onClick={copyToClipboard}
     whileHover={{y: -5}}
     whileTap={{scale: 1.05}}
     className="relative px-1 py-4 text-sm text-center
    rounded-full font-extralight bg-primary w-[12rem] cursor-pointer
    overflow-hidden">

     <AnimatePresence mode="wait">

     { copied ? ( <motion.p className="flex items-center justify-center gap-2"
       initial = {{ opacity: 0 , y: -10 }}
       key={"copied"}
       animate = {{opacity: 1 , y: 0 }}
       exit = {{opacity: 0 , y: -10 }}
       transition = {{duration:0.1 , ease: "easeInOut"}}
     >
       <img src="assets/copy-done.svg" alt="copy-done" className="w-5"
       /> email has been copied
       </motion.p>

     ) : ( 
     
     <motion.p className="flex items-center justify-center gap-2"
       initial = {{ opacity: 0  }}
       key={"copy"}
       animate = {{opacity: 1  }}
       exit = {{opacity: 0 }}
       transition = {{duration:0.1 }}
     
     >
    <img src="/assets/copy.svg" className="w-5" alt="copy png" />
    Copy Email Address
    </motion.p>)}
    </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
