import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../redux/cartSlice";
import { motion } from "framer-motion";
import Skeleton from "./Skeleton";
export default function Item({ product, quantity }) {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addToCart = () => {
    dispatch(addItems({ ...product, quantity }));
 
      setAdded(true);
    
  };
/*    useEffect(() => {
    cart.items.map((item) => {
      if (item !==null && item.name.includes(product.name)) {
        setAdded(true);
      }
      else if(item.name !== product.name){
        setAdded(false);
      }
    });
    
  } ,[cart.items])  */

  return (
    <>
 
     {product ? 
      <motion.div
      transition={{ duration: 0.5 }}
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="w-[300px] md:w-56 shadow-3xl h-76 flex-col p-3 rounded-xl space-y-2"
    >
      <div className="relative rounded-xl h-56 w-full">
        <Image
          className="rounded-xl"
          src={product.images[3].url}
          alt="Product Image"
          layout="fill"
          objectFit="cover"
        />
        {product.discount > 0 ? (
          <div className="text-white text-xs right-3 absolute bg-discount h-12 w-12 flex flex-col justify-center items-center">
            {product.discount}%<h1 className="text-xs">OFF</h1>
          </div>
        ) : null}
      </div>
      <div className=" flex flex-col space-y-3 h-2/6 w-full">
        <div className=" mt-2 h-6 flex items-center justify-center space-x-20">
          <h6 className="text-xs font-bold">{product.name}</h6>
          <h6 className="text-xs font-bold">${product.price}</h6>
        </div>
        <div className="group">
          <button
            onClick={() => {
              addToCart();
            }}
            disabled={added}
            className={` flex items-center justify-around px-12 cursor-pointer text-xs  ${
              added
                ? "border-2 border-gray-300 font-semibold bg-white text-black"
                : "bg-black text-white"
            } rounded-2xl h-8 w-full`}
          >
            {added ? "ADDED" : "ADD TO CART      "}
            {
              <div className="transition duration-1000 hidden group-hover:block">
                <Image
                  className="transition duration-1000 "
                  alt="button image"
                  width={12}
                  height={12}
                  src={`/assets/Icons/${
                    added ? "added.svg" : "addToCart.svg"
                  }`}
                />
              </div>
            }
          </button>
        </div>
      </div>
    </motion.div>
    :<Skeleton/>}
    </>
  );
}
