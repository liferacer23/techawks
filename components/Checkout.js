import { useEffect, useState } from "react";
import Image from "next/image";
import CheckoutItem from "./CheckoutItem";
import OrderSummary from "./OrderSummary";
import { gql, useMutation } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";
export default function Checkout({ orders, setCheckout, setCartFlipper }) {
  const [orderSummary, setOrderSummary] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 // const [fullname, setFullName] = useState(firstName + lastName);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal, setPostal] = useState("");
  let price = 0;
  const [total, setTotal] = useState();
  //const cart = useSelector((state) => state.cart);
  // console.log(total);
  const ORDER_MUTATION = gql`
  mutation CreateOrder($input:OrderInput!){ 
  createOrder(input:$input) {
  orderId
  orderNumber
  zipCode
  customerAddress1
  deliveryDate
    orderItems{
      productId
    }
 }
}`;
  const assignTotal = () => {
    setTotal(price);
  };
  //console.log();
  const [createOrder,{data,loading,error}] = useMutation(ORDER_MUTATION,{});

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  
  const submit = () => {
  /*  createOrder({    
      variables:{OrderInput:{
      customerEmailPhone: email, 
      country: country ,
      customerFullName: firstName,
      customerCity: city,
      customerAddress1: address1,
      customerAddress2: address2,
      zipCode: postal
      }
    
    }});  */
    setOrderSummary((prev) => !prev);
    assignTotal();
  };
  
  //console.log(data);
   
    /*   orderItem:[orders.map((order)=>{
          return {productId:order.productId,quantity:order.quantity}
       })] */
  
  return (
    <>
      <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}} className="flex w-screen h-screen flex-col absolute bg-white inset-0 ">
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
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4"
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="w-full flex flex-col space-y-3">
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-full"
                        type="text"
                        placeholder="Adress Line 1"
                        onChange={(e) => {
                          setAddress1(e.target.value);
                        }}
                      />
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-full"
                        type="text"
                        placeholder="Adress Line 2"
                        onChange={(e) => {
                          setAddress2(e.target.value);
                        }}
                      />
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-full"
                        type="text"
                        placeholder="City/Town"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                    </div>
                    <div className="w-full flex space-x-2">
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4"
                        type="text"
                        placeholder="Country"
                        onChange={(e) => {
                          setCountry(e.target.value);
                        }}
                      />
                      <input
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4"
                        type="text"
                        placeholder="Postal"
                        onChange={(e) => {
                          setPostal(e.target.value);
                        }}
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
                  {orders.map((item) => {
                    return <CheckoutItem key={item.productId} item={item} />;
                  })}
                </div>
                <div className="flex flex-col space-y-1 h-3/6 ">
                  <div className="flex justify-between p-2 mx-12 ">
                    <h1 className="font-xs font-bold text-xxs bold text-gray-400">
                      SUBTOTAL
                    </h1>
                    <h1 className="font-xs font-bold text-xs font-bold">
                      $
                      {orders.map((item) => {
                        price =
                          price +
                          parseInt(item.quantity, 10) *
                            parseInt(item.price, 10);
                      })}
                      {price}
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
                      USD ${parseInt(price) + 50}
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
                  
                    submit();
                  }}
                  className="border-2 border-black-500 rounded-full text-white text-xs bg-black h-9 w-48"
                >
                  COMPLETE PAYMENT
                </button>
              </div>
            </div>
          </div>
          <hr className=" mt-2" />
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
      </motion.div>
      {orderSummary ? (
        <AnimatePresence>
        <OrderSummary
        key={"orderSummary"}
        data={data}
          orders={orders}
          total={total}
          setCartFlipper={setCartFlipper}
          setCheckout={setCheckout}
          setOrderSummary={setOrderSummary}
        />
        </AnimatePresence>
      ) : (
        ""
      )}
    </>
  );
}
