import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";
import { gql  } from "@apollo/client";
export default function ItemContainer({ search, Items, filter }) {
  //console.log(Items);
  const dispatch = useDispatch();
  const quantity = 1;
const ORDER_QUERY = gql`
mutation  {
  createOrder(input:{customerEmailPhone:"binyamg23@gmail.com",country:"ethiopia",customerFullName:"Tracy Mac",customerCity:"mekanisa",customerAddress1:"addis ababa",zipCode:"11655",customerAddress2:"mekanjs"
 }){
   orderId
 }
     


}`;
  return (
    <div className="h-full w-full flex flex-wrap gap-8 p-1">
      {Items.filter((res) => {
        if (search === "") {
          if (filter.length === 0) {
            return res;
          } else if (filter.includes(res.subCategoryId)) {
            return res;
          }
        } else if (search !== "" && filter.length === 0) {
          if (res.name.toLowerCase().includes(search.toLowerCase())) {
            return res;
          }
        } else if (search !== "" && filter.length !== 0) {
          if (
            res.name.toLowerCase().includes(search.toLowerCase()) &&
            filter.includes(res.subCategoryId)
          ) {
            return res;
          }
        }
      }).map((product) => {
        return (
          <div
            key={product.productId}
            className="w-56 shadow-3xl h-76 flex-col p-3 rounded-xl space-y-2"
          >
            <div className="relative rounded-xl h-56 w-full">
              <Image
                className="rounded-xl"
                src={product.images[3].url}
                alt="Product Image"
                layout="fill"
                objectFit="cover"
              />
              {product.discount>0 ? <div className="text-white text-xs right-3 absolute bg-discount h-12 w-12 flex flex-col justify-center items-center">
                {product.discount}%
                <h1 className="text-xs">OFF</h1>
              </div>:null}
            </div>
            <div className=" flex flex-col space-y-3 h-2/6 w-full">
              <div className=" mt-2 h-6 flex items-center justify-center space-x-20">
                <h6 className="text-xs font-bold">{product.name}</h6>
                <h6 className="text-xs font-bold">${product.price}</h6>
              </div>
              <div>
                <button onClick={()=>{dispatch(addItems({...product,quantity}))}} className="cursor-pointer text-xs text-white bg-black rounded-2xl h-8 w-full">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
