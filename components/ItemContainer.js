import React from "react";
import { gql  } from "@apollo/client";
import Item from "./Item";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
export default function ItemContainer({ search, Items, filter }) {
  //console.log(Items);
 
  const [quantity,setQuantity]=useState(1);
const ORDER_QUERY = gql`
mutation  {
  createOrder(input:{customerEmailPhone:"binyamg23@gmail.com",country:"ethiopia",customerFullName:"Tracy Mac",customerCity:"mekanisa",customerAddress1:"addis ababa",zipCode:"11655",customerAddress2:"mekanjs"
 }){
   orderId
 }
     


}`;
  return (
   
    <motion.div layout  className="h-full w-full flex flex-wrap gap-8 p-1">
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
          // eslint-disable-next-line react/jsx-key
          <AnimatePresence>
          <Item key={product.productId} quantity={quantity} product={product}/>
          </AnimatePresence>
        );
      })}
    </motion.div>
   
  );
}
