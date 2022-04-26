import Image from "next/image";
import Link from "next/link";
import CartModal from "./CartModal";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const [cartFlipper, setCartFlipper] = useState(false);
  const router = useRouter();
  return (
    <div>
      <nav className="sticky top-0 z-40 flex w-screen h-20">
        <div className=" flex p-2 justify-between items-center mx-5 bg-white w-full">
        <div className="ml-6 cursor-pointer">
          <Image
            src="/assets/Icons/logo.svg"
            alt="Shopify logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex space-x-14 text-xs font-bold text-gray-500">
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
          { router.asPath=="/products/product/aeb50ed6-580d-a065-383a-e3932fbec6a1"?<span className=" bg-gray-700 h-0.5 w-5 flex justify-center items-center rounded-full"></span>:null}

            </div>
  
            </Link>
      
          <Link href="/contact">
            <div className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
              <span className="cursor-pointer">
                Contact
              </span>
              {router.asPath == "/contact" ? (
                <span className="bg-gray-700 h-0.5 w-5 flex justify-center items-center rounded-full"></span>
              ) : null}
            </div>
          </Link>
          <Link href="/about">
            <div className="flex flex-col space-y-1 w-1/4 items-center justify-start p-1">
              <span className="cursor-pointer">about</span>
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
              3
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
        </div>
        </div>
      </nav>

      {children}
      <footer></footer>
      {cartFlipper ? (
        <CartModal cartFlipper={cartFlipper} setCartFlipper={setCartFlipper} />
      ) : null}
    </div>
  );
}
