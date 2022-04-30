import {useState} from "react";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/cartSlice";
import {motion,AnimatePresence} from "framer-motion"
export default function CartModal({ setCartFlipper }) {
  const cart = useSelector((state)=>state.cart);
  const [checkout, setCheckout] = useState(false);
  const [orders, setOrders] = useState();
  const dispatch = useDispatch();
  



  const ordersSet =()=>{
    /* let number = cart.items.length
    let index = cart.orders.length-cart.items.length */
   setOrders(cart.orders)
   const uniqueAddresses = Array.from(new Set(cart.orders.map(a => a.productId)))
 .map(productId => {
   return cart.orders.find(a => a.productId === productId)
 })
 setOrders(uniqueAddresses);
   //console.log(orders);
   setCheckout(prev=>!prev);
  }
  const cartHandler = (e) => {
    e.stopPropagation();
    setCartFlipper((prev) => !prev);
  };

  const clearCart = () => {
   
     dispatch(reset())
  };

  const buttonDisabled = () => {
  
    if(cart.items.length !== 0){
      return false;
    }
    else(cart.items.length === 0)
    {
      return true;
    }
  }
  return (
    
    
    <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}} className="z-50 fixed inset-0">
      <motion.div
      animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}}
        onClick={(e) => {
          cartHandler(e);
        }}
        className="fixed inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full"
      >

      </motion.div>
    
      <AnimatePresence>
      <motion.div key={"cart"} animate={{x:0}} initial={{x:800}} exit={{x:800}} transition={{duration:1}} className={`${checkout?"hidden":""} overflow-y-auto overflow-x-hidden absolute bg-white top-0 right-0 h-full z-50 w-3/5 flex flex-col p-2 items-center px-14`} >
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
              {cart.items.length}
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
          <div className=" flex w-full mt-2">
              <div className="flex w-full justify-between space-x-1">
                <div>
                <button /* disabled={cart.items.length===0? true:false} */ onClick={()=>{clearCart()}} className="border-2 border-gray-500 rounded-full text-black font-bold text-xs h-9 w-36">CLEAR CART</button>    </div>
                <div className="flex space-x-2"> 
                <button onClick={()=>{setCartFlipper(prev=>!prev)}} className="border-2 border-gray-500 rounded-full text-black font-bold text-xs h-9 w-48">CONTINUE SHOPPING</button>
                <button /* disabled={cart.items.length===0? true:false} */ onClick={()=>{ordersSet()}}className="border-2 border-black-500 rounded-full text-white text-xs bg-black  h-9 w-48">PROCESS TO CHECKOUT</button>
                </div>
              </div>
          </div>
        </div>
      </motion.div>
        </AnimatePresence>
   
      {checkout?<Checkout orders={orders} setCartFlipper={setCartFlipper} setCheckout={setCheckout}/>:""}
    </motion.div>
    
    
    );
  }
  