import React from "react";
import Image from "next/image";
import { gql  } from "@apollo/client";
import Item from "./Item";
export default function ItemContainer({ search, Items, filter }) {
  //console.log(Items);
 
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
          <Item key={product.productId} quantity={quantity} product={product}/>
        );
      })}
    </div>
  );
}
