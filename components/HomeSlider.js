import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect,useRef } from "react";
import Image from "next/image";
export default function HomeSlider() {

  const [width, setWidth] = useState(0);
  const carousel = useRef()
  const images = [
    "/assets/home/1.png",
    "/assets/home/2.png",
    "/assets/home/3.png",
    "/assets/home/4.png",
    "/assets/home/5.png",
    "/assets/home/6.png",
    "/assets/home/7.png",
    "/assets/home/8.png",
    "/assets/home/9.png",
    "/assets/home/10.png",
    "/assets/home/11.png",
    "/assets/home/12.png",
  ];

  useEffect(()=>{
console.log(carousel.current.scrollWidth + carousel.current.offsetWidth)
setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth);
  },[])
  return (
    <motion.div ref={carousel} whileTap={{cursor:"grabbing"}} className="relative p-2 h-[28rem] w-full cursor-grab overflow-hidden ">
      <motion.div drag="x"  dragConstraints={{right:0,left:-width}} className="flex absolute h-[430px]">
        {images.map((item, index) => {
          return (
            <motion.div key={index} animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.8}} className="pointer-events-none p-3 min-w-[25rem] min-h-[40rem]">
              <Image
                className=" w-full h-full rounded-xl"
                key={index}
                alt="images"
                src={item}
                width={410}
                height={430}
                priority
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
