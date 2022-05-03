import Image from "next/image";
import Link from "next/link";
import CartModal from "./CartModal";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
export default function Layout({ children }) {
  const cart = useSelector((state) => state.cart);
  const [cartFlipper, setCartFlipper] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="relative sticky top-0 z-40 flex w-screen h-20">
        <div className=" flex p-2 justify-between items-center bg-white w-full">
          <div className="ml-6 cursor-pointer">
            <Image
              src="/assets/Icons/logo.svg"
              alt="Shopify logo"
              width={100}
              height={100}
            />
          </div>
          <div className="hidden md:block md:flex md:space-x-14 md:text-xs md:font-bold md:text-gray-500">
            <Link href="/">
              <div className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
                <span className="cursor-pointer ">Home</span>
                {router.asPath == "/" ? (
                  <span className="bg-gray-700 h-0.5 w-5 flex justify-center items-center rounded-full"></span>
                ) : null}
              </div>
            </Link>

            <Link href="/products/product/aeb50ed6-580d-a065-383a-e3932fbec6a1">
              <div className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
                <span className="cursor-pointer">Products</span>
                {router.asPath ==
                "/products/product/aeb50ed6-580d-a065-383a-e3932fbec6a1" ? (
                  <span className=" bg-gray-700 h-0.5 w-5 flex justify-center items-center rounded-full"></span>
                ) : null}
              </div>
            </Link>

            <Link href="/contact">
              <div className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
                <span className="cursor-pointer">Contact</span>
                {router.asPath == "/contact" ? (
                  <span className="bg-gray-700 h-0.5 w-5 flex justify-center items-center rounded-full"></span>
                ) : null}
              </div>
            </Link>
            <Link href="/about">
              <div className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
                <span className="cursor-pointer">About</span>
                {router.asPath == "/about" ? (
                  <span className=" bg-gray-700 h-0.5 w-5 flex justify-center items-center rounded-full"></span>
                ) : null}
              </div>
            </Link>
          </div>
          <div className="flex mr-6 space-x-3">
            <div
              onClick={() => {
                setCartFlipper((prev) => !prev);
              }}
              className=" relative h-9 w-9 cursor-pointer flex justify-center items-center border-2 border-grey-500 rounded-full"
            >
              <Image
                src="/assets/Icons/bag.svg"
                alt="cart bag"
                width={15}
                height={15}
              />
              <span className=" flex justify-center items-center text-xxs font-bold text-white h-3.5 w-3.5 rounded-full top-0 -right-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute">
                {cart.items.length}
              </span>
            </div>
            <div className="relative cursor-pointer h-9 w-9 flex justify-center items-center border-2 border-grey-500 rounded-full">
              <Image
                className="rounded-full"
                src="/assets/girl/girl.png"
                alt="Profile picture"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div onClick={()=>{setHamburger(prev=>!prev)}} className=" md:hidden h-9 w-9 p-1 cursor-pointer flex flex-col justify-center items-center">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-0.5 h-[2px] w-full"></div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-0.5 h-[2px] w-full"></div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 m-0.5 h-[2px] w-full"></div>
              
            </div>
          </div>
        </div>
      
      </nav>
      
      {children}

      <footer className=" bg-gray-100 mt-3 h-20 p-2">
        <div className=" h-full flex justify-between items-center ">
          <div className="h-15 flex w-fit p-2 items-center">
            <Image alt ="image" src="/assets/Icons/logo.svg" width={100} height={60} />
          </div>
          <div>
          <h1 className="text-black text-1xs">
          &copy; Allrights Reserved 2022,Addis Ababa,Ethiopia
          </h1>
          </div>
          <div className="h-10 flex items-center">
            <Image alt ="image" src="/assets/social/facebook.svg" width={80} height={18} />
            <Image alt ="image" src="/assets/social/insta.png" width={20} height={18} />
            <Image alt ="image" src="/assets/social/twitter.svg" width={80} height={18} />
          </div>
        </div>
      </footer>
      <AnimatePresence>{hamburger?<Sidebar setHamburger={setHamburger}/>:""}</AnimatePresence> 
      <AnimatePresence>
        {cartFlipper ? (
          <CartModal
            cartFlipper={cartFlipper}
            setCartFlipper={setCartFlipper}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
