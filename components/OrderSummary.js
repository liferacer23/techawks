import React from "react";
import Image from "next/image";
export default function OrderSummary({
  setOrderSummary,
  setCartFlipper,
  setCheckout,
}) {
  const closer = () => {
    setCartFlipper(false);
    setOrderSummary(false);
    setCheckout(false);
  };
  return (
    <div className="flex flex-col absolute bg-white inset-0 ">
      <div className="mx-5 h-fit">
        <div className="w-full h-16 flex items-center justify-start p-2">
          <Image
            src="/assets/Icons/logo.svg"
            alt="logo picture"
            width={100}
            height={100}
          />
        </div>
        <div className="flex justify-between">
          <div className="flex p-2 justify-center items-center w-2/6 h-96">
            <div className="flex flex-col space-y-5">
              <div className="flex-col w-full h-fit space-y-2">
                <Image
                  alt="approved image"
                  src="/assets/Icons/success.svg"
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex flex-col items-start w-full space-y-1">
                <h1 className="text-xl font-bold">
                  Thank you for Shopping with Shopily.
                </h1>
                <p className="text-xs font-medium">
                  Your orders are on the way
                </p>
              </div>
              <div className="w-full flex justify-start">
                <button
                  onClick={() => {
                    closer();
                  }}
                  className="cursor-pointer rounded-full border-2 w-44 h-8 border-gray-500 text-xs font-medium"
                >
                  BACK TO SHOPPING
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-3/6 h-[31rem] mt-1 mx-5 p-2 ">
            <div className="w-full flex justify-start font-bold p-2">
              Order Summary
            </div>
            <div className="flex w-full p-2 justify-between">
              <h1 className="text-xxs font-bold text-gray-400">ORDER NO</h1>
              <div className=" w-3/6 flex justify-start items-center">
                <h1 className="text-xs font-bold text-black">568484</h1>
              </div>
            </div>
            <div className="flex w-full p-2 justify-between">
              <h1 className="text-xxs font-bold text-gray-400">
                EST DELIVERY DATE
              </h1>
              <div className=" w-3/6 flex justify-start items-center">
                <h1 className="text-xs font-bold text-black">18 April 2022</h1>
              </div>
            </div>
            <div className="flex w-full p-2 justify-between">
              <h1 className="text-xxs font-bold text-gray-400">
                SHIPPING DETAILS
              </h1>
              <div className=" w-3/6 flex justify-start items-center">
                <h1 className="w-36 text-xs font-bold text-black">
                  PAUL WRITER AFRICA ANV ST, ADDIS ABABA ETHIOPIA
                </h1>
              </div>
            </div>
            <hr className="mx-8 mt-1" />
            <div className=" flex justify-end w-full mt-2">
              <div className="w-full flex justify-end p-2 mx-5">
                <div className="flex justify-between  w-3/6 h-full ">
                  <h1 className="text-xs font-bold text-gray-500">TOTAL</h1>
                  <h1 className="text-xs font-bold text-black">$5444</h1>
                </div>
              </div>
            </div>
            <hr />
            <div className="  w-full h-fit overflow-y-auto">
              <div className=" flex p-2 justify-between w-full  h-fit mb-4">
                <div className="relative w-28 h-28 rounded-xl">
                  <Image
                    className="rounded-xl"
                    src="/assets/girl/girl.png"
                    alt="cart item"
                    layout="fill"
                    objectFit="cover"
                  />
                  <span className=" flex justify-center items-center text-xxs text-white h-3.5 w-3.5 rounded-full -top-1 -right-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute">
                    3
                  </span>
                </div>

                <div className="flex h-full justify-start w-3/6  ">
                  <div className="flex flex-col w-5/6">
                    <h1 className="text-xs font-bold">ONYX WOOD CHAIR</h1>
                    <p className="text-xxs mt-1 w-4/6 font-semibold ">
                      Lorem ipsum dolorpedita doloribus nobis itaque blanditiis,
                      quas, enim quibusdam eaque numquam?
                    </p>
                  </div>
                  <div className="flex flex-col-p-2 justify-start">
                    <h1 className="text-xs font-bold">$2323</h1>
                  </div>
                </div>
              </div>
              <div className=" flex p-2 justify-between w-full  h-fit mb-4">
                <div className="relative w-28 h-28 rounded-xl">
                  <Image
                    className="rounded-xl"
                    src="/assets/girl/girl.png"
                    alt="cart item"
                    layout="fill"
                    objectFit="cover"
                  />
                  <span className=" flex justify-center items-center text-xxs text-white h-3.5 w-3.5 rounded-full -top-1 -right-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute">
                    3
                  </span>
                </div>

                <div className=" flex h-full justify-start w-3/6  ">
                  <div className="flex flex-col w-5/6">
                    <h1 className="text-xs font-bold">ONYX WOOD CHAIR</h1>
                    <p className="text-xxs mt-1 w-4/6 font-semibold ">
                      Lorem ipsum dolorpedita doloribus nobis itaque blanditiis,
                      quas, enim quibusdam eaque numquam?
                    </p>
                  </div>
                  <div className="flex flex-col-p-2 justify-start">
                    <h1 className="text-xs font-bold">$2323</h1>
                  </div>
                </div>
              </div>
              <div className=" flex p-2 justify-between w-full  h-fit mb-4">
                <div className="relative w-28 h-28 rounded-xl">
                  <Image
                    className="rounded-xl"
                    src="/assets/girl/girl.png"
                    alt="cart item"
                    layout="fill"
                    objectFit="cover"
                  />
                  <span className=" flex justify-center items-center text-xxs text-white h-3.5 w-3.5 rounded-full -top-1 -right-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute">
                    3
                  </span>
                </div>

                <div className=" flex h-full justify-start w-3/6  ">
                  <div className="flex flex-col w-5/6">
                    <h1 className="text-xs font-bold">ONYX WOOD CHAIR</h1>
                    <p className="text-xxs mt-1 w-4/6 font-semibold ">
                      Lorem ipsum dolorpedita doloribus nobis itaque blanditiis,
                      quas, enim quibusdam eaque numquam?
                    </p>
                  </div>
                  <div className="flex flex-col-p-2 justify-start">
                    <h1 className="text-xs font-bold">$2323</h1>
                  </div>
                </div>
              </div>
              <hr className="mx-12" />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 top-50">
          <hr className="mt-5" />
          <div className="flex p-2 space-x-4 justify-start items-center">
            <span className="cursor-pointer text-xs text-gray-500 ">
              Refund Policy
            </span>
            <span className="cursor-pointer text-xs text-gray-500 ">
              Privacy Policy
            </span>
            <span className="cursor-pointer text-xs text-gray-500 ">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
