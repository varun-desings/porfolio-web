import { useState } from "react";
import { motion } from 'framer-motion';

function Navigation() {
    return( <ul className="nav-ul">
             <li className="nav-li">
                <a className="hover:text-white" href="#home">Home</a>
             </li>
             <li className="nav-li">
                <a className="hover:text-white" href="#work">Work</a>
             </li>
             <li className="nav-li">
                <a className="hover:text-white" href="#about">About</a>
             </li>
             <li className="nav-li">
                <a className="hover:text-white" href="#home">contact</a>
             </li>
           </ul>
    );
}

const Navbar = () => {
    const[isOpen, setIsOpen]=useState(false)
  return (
    <div class="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div class="mx-auto c-space max-w-7xl">
        <div class="flex items-center justify-between py-2 sm:py-0">
           <a href="/" 
            class="text-xl mt-2 font-bold transition-colors
             text-neutral-400 hover:text-white">Varun</a>
             <button
             onClick={() => setIsOpen(!isOpen)}
             className="flex cursor-pointer text-neutral-400
             hover:text-white focus:outline-none sm:hidden
             ">
                <img src={isOpen? "/assets/close.svg":"/assets/menu.svg"} class="w-6 h-6 "/>
             </button>

             <nav className="hidden sm:flex ">
                <Navigation/>
             </nav>
        </div>
      </div>
    {isOpen && (
         <motion.div className="block overflow-hidden text-center 
      sm:hidden"
      initial={{ opacity: 0, x:-10 }}
      animate={{opacity:1, x:0}}
      style={{maxHeright:"100vh"}}
      transition={{duration:1}}
      >
        <nav className="pb-5">
            <Navigation/>
        </nav>
      </motion.div>
    )}
    </div>
  )
}

export default Navbar;

