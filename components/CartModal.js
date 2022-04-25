import React from "react";
import Image from "next/image";
export default function CartModal({ setCartFlipper }) {
  const cartHandler = (e) => {
    e.stopPropagation();
    setCartFlipper((prev) => !prev);
  };
  return (
    <div className="fixed inset-0">
      <div
        onClick={(e) => {
          cartHandler(e);
        }}
        className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full"
      ></div>
      <div className=" overflow-y-auto overflow-x-hidden absolute bg-white top-0 right-0 h-full z-50 w-3/5 flex flex-col p-2 items-center px-14">
        <div className="flex w-full h-16 justify-end items-center p-2">
          <div  onClick={() => {
                setCartFlipper((prev) => !prev);
              }} className="relative cursor-pointer flex items-center justify-between w-24 h-8 border-2 border-gray-200 rounded-2xl px-4">
            <button
             
              className="text-xs text-black font-bold cursor-pointer rounded-2xl h-8 w-1/6 "
            >
              Close
            </button>
            <span className=" flex justify-center items-center text-xxs font-bold text-white h-3.5 w-3.5 rounded-full top-2 right-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute">
              3
            </span>
          </div>
        </div>
        <hr className="w-full mx-8 mt-2" />
        <div className="flex flex-col w-full mt-4">
          <div className="p-2 flex w-full h-10 item-center justify-start">
            <h4 className=" font-bold text-md">Order Summary</h4>
          </div>
          {/* /////////////////////////// */}
          <div className=" flex space-x-3 p-2">
            <div className=" w-2/6 relative w-36 h-40 rounded-xl">
              <Image
                className="rounded-xl"
                alt="item Image"
                src="/assets/girl/girl.png"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="  w-4/6 h-full flex flex-col p-2 space-y-3">
              <div className="flex h-5/6 w-full justify-between">
                <div className="flex flex-col space-y-1">
                  <h1 className="text-xs font-bold">ONYX WOOS CHAIR</h1>
                  <p className="text-xs font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    quaerat voluptates laboriosam asperiores! Nam, minus ullam
                    iure nisi accusamus perferendis eum in ipsa laborum beatae
                    error eos, natus dolore? Fugit?
                  </p>
                </div>
                <div className="relative">
                  <Image
                    alt="item Image"
                    src="/assets/Icons/remove.svg"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <div className=" h-2/6 flex items-center px-2 w-full justify-between">
                <div>
                  <h1 className="text-xs font-bold">$14665</h1>
                </div>
                <div className=" w-1/4 h-full flex items-center justify-evenly p-2">
                  <Image
                    alt="item Image"
                    src="/assets/Icons/add.svg"
                    width={20}
                    height={20}
                  />

                  <div>
                    <h1 className="text-xs font-bold">2</h1>
                  </div>
                  <Image
                    alt="item Image"
                    src="/assets/Icons/minus.svg"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            
          </div>
          <hr className="mt-2"/>
          <div className=" flex space-x-3 p-2">
            <div className=" w-2/6 relative w-36 h-40 rounded-xl">
              <Image
                className="rounded-xl"
                alt="item Image"
                src="/assets/girl/girl.png"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="  w-4/6 h-full flex flex-col p-2 space-y-3">
              <div className="flex h-5/6 w-full justify-between">
                <div className="flex flex-col space-y-1">
                  <h1 className="text-xs font-bold">ONYX WOOS CHAIR</h1>
                  <p className="text-xs font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    quaerat voluptates laboriosam asperiores! Nam, minus ullam
                    iure nisi accusamus perferendis eum in ipsa laborum beatae
                    error eos, natus dolore? Fugit?
                  </p>
                </div>
                <div className="relative">
                  <Image
                    alt="item Image"
                    src="/assets/Icons/remove.svg"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
              <div className=" h-2/6 flex items-center px-2 w-full justify-between">
                <div>
                  <h1 className="text-xs font-bold">$14665</h1>
                </div>
                <div className=" w-1/4 h-full flex items-center justify-evenly p-2">
                  <Image
                    alt="item Image"
                    src="/assets/Icons/add.svg"
                    width={20}
                    height={20}
                  />

                  <div>
                    <h1 className="text-xs font-bold">2</h1>
                  </div>
                  <Image
                    alt="item Image"
                    src="/assets/Icons/minus.svg"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            
          </div>
          <hr className="mt-2"/>
        </div>
        <div className="mt-40 flex w-full flex-col space-y-2 p-2">
        <hr className="mt-1"/>
          <div className="flex items-center justify-between">
            <h1 className="text-xs font-bold">TOTAL INC TAX</h1>
            <h1 className="text-xs font-bold">$1,245</h1>
          </div>
          <hr className="mt-1"/>
          <div className=" flex w-full justify-end mt-2">
              <div className="flex w-4/6 space-x-3">
                <button className="border-2 border-gray-500 rounded-full text-black-500 text-xs h-9 w-48">CONTINUE SHOPPING</button>
                <button className="border-2 border-black-500 rounded-full text-white text-xs bg-black  h-9 w-48">PROCESS TO CHECKOUT</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
