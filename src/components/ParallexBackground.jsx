import {motion, useScroll, useSpring, useTransform} from 'motion/react';

const ParallexBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, {damping: 50})

  const mountain3Y =useTransform(x, [0,0.5] ,["0%","70%"]);
  const planetsX =useTransform(x, [0,0.5] ,["0%","-20%"]);
  const mountain2Y =useTransform(x, [0,0.5] ,["0%","30%"]);
  const mountain1Y =useTransform(x, [0,0.5] ,["0%","0%"]);
  return (
    <section className='absolute inset-0 bg-transparent'>
      <div className='relative h-screen overflow-y-hidden'>
        {/*BCKGROUND sky */}
        <div
        className='absolute inset-0 w-full h-screen -z-50'
        style={{
          background: "url(assets/sky.jpg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        />
        {/*Mountain layer 3 */}
        <motion.div 
        className='absolute inset-0 -z-40'
        style={{
          background: "url(/assets/mountain-3.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain3Y,
        }}
        />
        {/*Planets */}
        <motion.div
        className='absolute inset-0 -z-30'
        style={{
          background: "url(/assets/planets.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          x: planetsX,
        }}
        />
        {/*Mountain Layer 2 */}
        <motion.div
         className='absolute inset-0 -z-20'
        style={{
          background: "url(/assets/mountain-2.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y:mountain2Y,
        }}
        />
        {/*Mountain Layer 1 */}
        <motion.div
        className='absolute inset-0 -z-10'
        style={{
          background: "url(/assets/mountain-1.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: mountain1Y,
        }}
        />
        <div className=' w-full h-full bg-black/40 -z-20 absolute' />
      </div>
    </section>
  )
}

export default ParallexBackground;
