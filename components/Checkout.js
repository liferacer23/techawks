import { useEffect, useState } from "react";
import Image from "next/image";
import CheckoutItem from "./CheckoutItem";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";
export default function Checkout({ setCheckout, setCartFlipper }) {
  const [orderSummary, setOrderSummary] = useState(false);

  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="flex w-screen h-screen flex-col absolute bg-white inset-0 ">
        <div className="mx-5 w-full h-5/6">
          <div className="w-full h-16 flex items-center justify-start p-2">
            <Image
              src="/assets/Icons/logo.svg"
              alt="logo picture"
              width={100}
              height={100}
            />
          </div>
          <hr />
          <div className="w-full h-[32rem] overflow-y-auto flex flex-col p-2 space-y-2">
            <div className="flex h-[28rem] space-x-36 mx-10 justify-between">
              <div className="flex flex-col space-y-1 p-2 shadow-xl  items-center-justify-center rounded-xl w-2/6 px-10">
                <div className="flex flex-col space-y-4 h-1/6">
                  <h1 className="text-xs font-bold">Contact Information</h1>
                  <input
                    className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11"
                    type="text"
                    placeholder="Email or Phone Number"
                  />
                </div>
                <div className="flex flex-col space-y-3 h-5/6">
                  <div className="flex flex-col space-y-3 h-fit">
                    <h1 className="text-xs font-bold">Shipping Address</h1>
                    <div className="w-full flex space-x-2">
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4"
                        type="text"
                        placeholder="First Name"
                      />
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="w-full flex flex-col space-y-3">
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-full"
                        type="text"
                        placeholder="Adress Line 1"
                      />
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-full"
                        type="text"
                        placeholder="Adress Line 2"
                      />
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-full"
                        type="text"
                        placeholder="City/Town"
                      />
                    </div>
                    <div className="w-full flex space-x-2">
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4"
                        type="text"
                        placeholder="Country"
                      />
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4"
                        type="text"
                        placeholder="Postal"
                      />
                    </div>
                    <div className=" flex p-2 space-x-2 justify-start items-center">
                      <input type="checkbox" id="save" />
                      <label className=" text-xs font-bold" htmlFor="save">
                        Save this information for next time
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-2 p-2  pb-5 shadow-xl shadow-3xl justify-center rounded-xl w-4/6">
               <div className=" overflow-y-auto">
                {cart.items.map((item) => {
                  return <CheckoutItem key={item.productId} item={item} />;
                })}
</div>
                <div className="flex flex-col space-y-1 h-3/6 ">
                  <div className="flex justify-between p-2 mx-12 ">
                    <h1 className="font-xs font-bold text-xxs bold text-gray-400">
                      SUBTOTAL
                    </h1>
                    <h1 className="font-xs font-bold text-xs font-bold">
                      ${cart.total}
                    </h1>
                  </div>
                  <div className="flex justify-between p-2 mb-5 mx-12">
                    <h1 className="font-xs text-xxs font-bold text-gray-400">
                      SHIPPING
                    </h1>
                    <h1 className="font-xs text-xs font-bold">$50</h1>
                  </div>
                  <hr className="mt-5 mx-12" />
                  <div className="flex justify-between p-2 mx-12 mb-8">
                    <h1 className="font-xs text-xxs font-bold text-gray-400">
                      TOTAL
                    </h1>
                    <h1 className="font-xs text-xs font-bold">
                      USD ${cart.total}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-[40px] p-2 w-2/6">
              <div
                onClick={() => {
                  setCheckout((prev) => !prev);
                }}
                className=" cursor-pointer flex space-x-2 h-full justify-center items-center"
              >
                <Image
                  alt="return to carrt"
                  src="/assets/Icons/arrow_left.svg"
                  width={12}
                  height={12}
                />
                <h1 className="text-xs font-bold text-gray-400">
                  RETURN TO CART
                </h1>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => {
                    setOrderSummary((prev) => !prev);
                  }}
                  className="border-2 border-black-500 rounded-full text-white text-xs bg-black h-9 w-48"
                >
                  COMPLETE PAYMENT
                </button>
              </div>
            </div>
          </div>
          <hr className=" mt-2"/>
          <div className=" flex p-2 space-x-4 justify-start items-center">
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
      {orderSummary ? (
        <OrderSummary
          setCartFlipper={setCartFlipper}
          setCheckout={setCheckout}
          setOrderSummary={setOrderSummary}
        />
      ) : (
        ""
      )}
    </>
  );
}
