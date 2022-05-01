
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../redux/cartSlice";
import { removeOrders } from "../redux/cartSlice";
import { addOrders } from "../redux/cartSlice";
import { motion } from "framer-motion";
export default function CartItem({ item }) {
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const dispatch = useDispatch();
  //const cart = useSelector((state) => state.cart);
  //let productId = item.productId;
  const cart = useSelector((state)=>state.cart)
  //console.log(cart);


  useEffect(()=>{

    dispatch(addOrders({...item,quantity:itemQuantity}));
  },[])
  useEffect(()=>{

  
    cart.orders.map((data)=>{
      if(!data.name.includes(item.name)){
        dispatch(addOrders({...item,quantity:itemQuantity}))
      }
      else if(data.name.includes(item.name)){
        dispatch(removeOrders({item}))
        dispatch(addOrders({...item,quantity:itemQuantity}))
      }
    })


  },[item,itemQuantity])

  const DecItem = () => {
    if (itemQuantity < 0 || itemQuantity === 0) {
      setItemQuantity(1);
    } else if (itemQuantity > 1) {
      setItemQuantity((prev) => prev - 1);
    }
  };
  const IncItem = () => {
    if (itemQuantity < 0 || itemQuantity === 0) {
      setItemQuantity(1);
    }else if (itemQuantity > 0) {
    setItemQuantity((prev) => prev + 1);
    }
  };
  const removeItem = () => {
    dispatch(removeItems({ item }));
    // dispatch(reset())
  };

  return (
    <motion.div transition={{duration:0.5}} layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} className=" flex space-x-3 p-2">
      <div className=" w-2/6 relative w-36 h-40 rounded-xl">
        <Image
          className="rounded-xl"
          alt="item Image"
          src={item.images[3].url}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="  w-4/6 h-full flex flex-col p-2 space-y-3">
        <div className="flex h-5/6 w-full justify-between">
          <div className="flex flex-col space-y-1">
            <h1 className="text-xs font-bold">{item.name}</h1>
            <p className="text-xxs font-bold">{item.description}</p>
          </div>
          <div className="relative cursor-pointer">
            <Image
              onClick={() => {
                removeItem();
              }}
              alt="item Image"
              src="/assets/Icons/remove.svg"
              width={25}
              height={25}
            />
          </div>
        </div>
        <div className=" h-2/6 flex items-center px-2 w-full justify-between">
          <div>
            <h1 className="text-xs font-bold">${item.price}</h1>
          </div>
          <div className=" w-1/4 h-full flex items-center justify-evenly p-2">
            <Image
              className="cursor-pointer"
              onClick={IncItem}
              alt="item Image"
              src="/assets/Icons/add.svg"
              width={20}
              height={20}
            />

            <div>
              <h1 className="text-xs font-bold">{itemQuantity}</h1>
            </div>
            <Image
              className="cursor-pointer"
              onClick={DecItem}
              alt="item Image"
              src="/assets/Icons/minus.svg"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
