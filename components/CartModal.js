import {useState} from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
export default function CartModal({ setCartFlipper }) {

  const [checkout, setCheckout] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart)
  //console.log(cart);
  const cartHandler = (e) => {
    e.stopPropagation();
    setCartFlipper((prev) => !prev);
  };
  return (
    <div className="z-50 fixed inset-0">
      <div
        onClick={(e) => {
          cartHandler(e);
        }}
        className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full"
      ></div>
      <div className={`${checkout?"hidden":""} overflow-y-auto overflow-x-hidden absolute bg-white top-0 right-0 h-full z-50 w-3/5 flex flex-col p-2 items-center px-14`} >
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
        <div className="overflow-y-auto flex flex-col w-full mt-2">
          <div className="p-2 flex w-full h-10 item-center justify-start">
            <h4 className=" font-bold text-md">Order Summary</h4>
          </div>
          {/* /////////////////////////// */}
     {cart.items.map((item)=>{
return( <CartItem key={item.productId} item = {item}/>)
     })}
        
        
        </div>
        <div className=" flex w-full flex-col space-y-2 p-2">
        <hr className="mt-1"/>
          <div className="flex items-center justify-between">
            <h1 className="text-xs font-bold">TOTAL INC TAX</h1>
            <h1 className="text-xs font-bold">${cart.total}</h1>
          </div>
          <hr className="mt-1"/>
          <div className=" flex w-full justify-end mt-2">
              <div className="flex w-4/6 space-x-3">
                <button onClick={()=>{setCartFlipper(prev=>!prev)}} className="border-2 border-gray-500 rounded-full text-black-500 text-xs h-9 w-48">CONTINUE SHOPPING</button>
                <button onClick={()=>{setCheckout(prev=>!prev)}}className="border-2 border-black-500 rounded-full text-white text-xs bg-black  h-9 w-48">PROCESS TO CHECKOUT</button>
              </div>
          </div>
        </div>
      </div>
      {checkout?<Checkout setCartFlipper={setCartFlipper} setCheckout={setCheckout}/>:""}
    </div>
    
  );
}
