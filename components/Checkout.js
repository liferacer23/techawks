import { useEffect, useState } from "react";
import Image from "next/image";
import CheckoutItem from "./CheckoutItem";
import OrderSummary from "./OrderSummary";
import { gql, useMutation } from "@apollo/client";
import { AnimatePresence, motion } from "framer-motion";


const ORDER_MUTATION = gql`
  mutation CreateOrder($input: OrderInput!) {
    createOrder(input: $input) {
      orderId
      orderNumber
      zipCode
      country
      customerCity
      customerAddress1
      deliveryDate
      orderItems {
        productId
      }
    }
  }
`;

export default function Checkout({ orders, setCheckout, setCartFlipper }) {
  const [orderSummary, setOrderSummary] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  let price = 0;
  const [total, setTotal] = useState();
  const [orderData, setOrderData] = useState();
  const [obj, setObj] = useState({
    customerEmailPhone: "",
    country: "",
    customerFullName: "",
    customerCity: "",
    customerAddress1: "",
    customerAddress2: "",
    zipCode: "",
    orderItems:orders.map((order)=>{
      return {productId:order.productId,quantity:order.quantity}
   })
  });
  //const cart = useSelector((state) => state.cart);
  //console.log(orders);
  const formChecker =()=>{
    if(obj.customerEmailPhone.length>0 && obj.country.length>0 && obj.customerFullName.length>0 && obj.customerCity.length>0 && obj.customerAddress1.length>0 && obj.zipCode.length>0){
      return true
    }
    else{
      return false
    }
  }
  const assignTotal = () => {
    setTotal(price);
  };

  const [createOrder, { data }] = useMutation(ORDER_MUTATION, {
    onCompleted: (data) => {
      setOrderData(data);
      setTimeout(setConfirmed(true),3000);
      setTimeout(setLoading(false),3000);
      
     // console.log(data);
    }
  });

  // if (loading) {return (<div>LOADING......</div>) };
  //if (error) return <div>${error.message}</div> ;
  const submit = () => {
    setOrderSummary((prev) => !prev);
    assignTotal();
    // console.log(data)
    //
  };
  const confirm = (e) => {
    e.preventDefault();
    createOrder({
      variables: {
        input: obj,
      },
    });


    setOrderData(obj);
    
    // console.log(obj);
     
    //console.log(data)
  };
  
  return (
    <>
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: 800, opacity: 0 }}
        exit={{ x: 800, opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex w-screen h-screen flex-col absolute bg-white inset-0 "
      >
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
              {/*  ////////////////////////////// */}
              <form
                onSubmit={(e) => {
                  confirm(e);
                }}
                className="w-6/6 sm:w-3/6  overflow-y-auto flex flex-col space-y-1 p-2 shadow-xl  items-center-justify-center rounded-xl lg:w-2/6 px-10"
              >
                <div className="flex flex-col space-y-4 h-1/6">
                  <h1 className="text-xs font-bold">Contact Information</h1>
                  <input
                    className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-9"
                    type="text"
                    placeholder="Email or Phone Number"
                    onChange={(e) => {
                      setObj({ ...obj,customerEmailPhone: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-3 h-5/6">
                  <div className="flex flex-col space-y-3 h-fit">
                    <h1 className="text-xs font-bold">Shipping Address</h1>
                    <div className="w-full flex space-x-2">
                      <input
                      required
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-9 w-2/4"
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => {
                          setObj({ ...obj, customerFullName: e.target.value });
                        }}
                      />
                      <input
                      required
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-9 w-2/4"
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => {
                          setObj({ ...obj, customerFullName: obj.customerFullName + " "+ e.target.value });
                        }}
                      />
                    </div>
                    <div className="w-full flex flex-col space-y-3">
                      <input
                      required
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-9 w-full"
                        type="text"
                        placeholder="Adress Line 1"
                        onChange={(e) => {
                          setObj({ ...obj, customerAddress1: e.target.value.toUpperCase() });
                        }}
                      />
                      <input
                      required
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-9 w-full"
                        type="text"
                        placeholder="Adress Line 2"
                        onChange={(e) => {
                          setObj({ ...obj, customerAddress2: e.target.value.toUpperCase() });
                        }}
                      />
                      <input
                      required
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-9 w-full"
                        type="text"
                        placeholder="City/Town"
                        onChange={(e) => {
                          setObj({ ...obj, customerCity: e.target.value.toUpperCase() });
                        }}
                      />
                    </div>
                    <div className="w-full flex space-x-2">
                      <input
                      required
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-9 w-2/4"
                        type="text"
                        placeholder="Country"
                        onChange={(e) => {
                          setObj({ ...obj, country: e.target.value.toUpperCase() });
                        }}
                      />
                      <input
                      required
                        className="text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-9 w-2/4"
                        type="text"
                        placeholder="Postal"
                        onChange={(e) => {
                          setObj({ ...obj, zipCode: e.target.value });
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
                <div className="flex justify-end items-center p-1 w-full h-10">
                  <button
                    onClick={()=>{setLoading(true)}}
                    className={`${confirmed?"flex justify-center items-center text-xs bg-green-500 rounded-xl w-20 h-8 text-white":"flex justify-center items-center text-xs bg-black rounded-xl w-20 h-8 text-white"}`}
                    type="submit"
                    disabled={()=>{formChecker()}}
                  >
                    {confirmed?"Confirmed":loading?<Image src="/assets/Icons/loading.svg" alt="loading icon" width={25} height={25}/>:"Confirm"}
                  </button>
                </div>
              </form>
              <div className="hidden lg:block flex flex-col space-y-2 p-2  pb-5 shadow-xl shadow-3xl justify-center rounded-xl w-4/6">
                <div className="overflow-y-auto h-[70%]">
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
               {confirmed?<button
                  onClick={() => {
                    submit();
                  }}
                  className="border-2 border-black-500 rounded-full text-white text-xs bg-black h-9 w-48"
                >
                  COMPLETE PAYMENT
                </button>:""}
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
      <AnimatePresence>
        {orderSummary ? (
          <OrderSummary
            key={"orderSummary"}
            orderData={orderData}
            orders={orders}
            total={total}
            setCartFlipper={setCartFlipper}
            setCheckout={setCheckout}
            setOrderSummary={setOrderSummary}
          />
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}
