import React from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from 'framer-motion';
export default function Sidebar({setHamburger}) {
    const router = useRouter();
  return (
  
  <motion.div animate={{x:0,opacity:1}} initial={{x:-100, opacity:0}} exit={{x:-100,opacity:0}} transition={{duration:1}}  className=" fixed absolute top-20 right-2 z-50 md:hidden flex flex-col items-center justify-evenly w-48 h-96 bg-white space-y-2 text-sm font-bold text-gray-500">
            <Link href="/">
              <div onClick={()=>{setHamburger(prev=>!prev)}} className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
                <span className="cursor-pointer ">Home</span>
              </div>
            </Link>

            <Link href="/products/product/aeb50ed6-580d-a065-383a-e3932fbec6a1">
              <div onClick={()=>{setHamburger(prev=>!prev)}} className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
                <span className="cursor-pointer">Products</span>

              </div>
            </Link>

            <Link href="/contact">
              <div onClick={()=>{setHamburger(prev=>!prev)}} className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
                <span className="cursor-pointer">Contact</span>

              </div>
            </Link>
            <Link href="/about">
              <div onClick={()=>{setHamburger(prev=>!prev)}} className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
                <span className="cursor-pointer">About</span>
              </div>
            </Link>
          </motion.div>
    
  )
}
