import React from "react";
import { motion } from "framer-motion";
export default function Skeleton({ type }) {
  const ItemSkeleton = () => (
    <motion.div
      transition={{ duration: 1, repeat: Infinity }}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0.8 }}
      className=" bg-gray-300 w-[300px] md:w-56 shadow-3xl h-76 flex-col p-3 rounded-xl space-y-2"
    >
      <div className="relative rounded-xl h-56 w-full">
        <div className="text-white text-xs right-3 absolute bg-discount h-12 w-12 flex flex-col justify-center items-center">
          <h1 className="text-xs"></h1>
        </div>
      </div>
      <div className=" flex flex-col space-y-3 h-2/6 w-full">
        <div className=" mt-2 h-6 flex items-center justify-center space-x-20">
          <h6 className="text-xs font-bold"></h6>
          <h6 className="text-xs font-bold"></h6>
        </div>
        <div className="group">
          <button
            className={` flex items-center justify-around px-12 cursor-pointer text-xs 
          
              ? "border-2 border-gray-300 font-semibold bg-gray-500 text-black"
              : "bg-black text-white"
          } rounded-2xl h-8 w-full`}
          >
            <div className="transition duration-1000 hidden group-hover:block"></div>
          </button>
        </div>
      </div>
    </motion.div>
  );

  return <ItemSkeleton />;
}
