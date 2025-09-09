"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function updateHeight() {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="c-space section-spacing"
      ref={containerRef}>
      <h2 className="text-heading mb-40">My Work Experience</h2>
      <div ref={ref} className="relative  pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-xs md:w-full">
              <div
                className="h-10 absolute -left-[15px] w-10 rounded-full bg-midnight flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full  dark:bg-neutral-800 border  dark:border-neutral-700 p-2" />
              </div>
              <div className="flex-col hidden gap-2 text-2xl font-bold md:flex
              md:pl-32 md:text-3xl text-neutral-300 ">
                <h3>{item.date}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                <h3  className="text-3xl text-neutral-500">{item.job}</h3>
              </div>
              <h3
                className="hidden md:block text-xl md:pl-32 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-12 w-full">
              <div className="block mb-4 md:hidden text-2xl font-bold
               text-neutral-300 text-left">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>
               {item.contents.map((content , index) => (
                <p className="mb-3 font-normal text-neutral-400 max-w-2xl"
                key={index}>{content}</p>
               ))}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden 
          w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
          from-transparent from-[0%]  via-neutral-700 to-transparent to-[99%]  
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] 
          ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};
