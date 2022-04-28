import { useState,useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../redux/cartSlice";
export default function Item({ product, quantity }) {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart)
  const addToCart = () => {
    
    setAdded(true);
    dispatch(addItems({ ...product, quantity }));
  };
  /* useEffect(() => {
    cart.items.map((item)=>{
      
         if (added && item.productId.includes(product.productId)){
            setAdded(true);
        } 
         if (!added && !item.productId.includes(product.productId)){
            setAdded(false);
        } 
        
    })
  } ,[cart.items, product.productId]) */

  return (
    <div className="w-56 shadow-3xl h-76 flex-col p-3 rounded-xl space-y-2">
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
        <div>
          <button
            onClick={() => {
              addToCart();
            }}
            disabled={added}
            className={`flex items-center justify-around px-12 cursor-pointer text-xs  ${
                added
                ? "border-2 border-gray-300 font-semibold bg-white text-black"
                : "bg-black text-white"
            } rounded-2xl h-8 w-full`}
          >
            {added ? "ADDED" : "ADD TO CART      "}
            {
              <div className="invisible hover:visible">
                {" "}
                <Image
                  alt="button image"
                  width={10}
                  height={10}
                  src={`/assets/Icons/${
                    added ? "arrow.right.filled.svg" : "arrow.left.svg"
                  }`}
                />
              </div>
            }
          </button>
        </div>
      </div>
    </div>
  );
}
