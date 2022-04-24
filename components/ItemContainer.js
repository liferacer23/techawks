import React from "react";
import Image from "next/image";
import { useEffect } from "react";
export default function ItemContainer({ search, Items, filter }) {
 // console.log(search);
  return (
    <div className="h-full w-full flex flex-wrap gap-8 p-1">
      {Items.products
        .filter((res) => {
          if (search === "") {
            if (filter.length === 0) {
              return res;
            } else if (filter.includes(res.subCategoryId)) {
              return res;
            }
          } else if (search !== "") {
            if (res.name.toLowerCase().includes(search.toLowerCase()) && filter.includes(res.subCategoryId)) {
              return res;
            }
          }
        })
        .map((product) => {
          console.log(product);
          return (
            <div
              key={product.productId}
              className="w-56 shadow-3xl h-76 flex-col p-3 rounded-xl space-y-2"
            >
              <div className="relative h-56 w-full">
                <Image
                  className="rounded-xl"
                  src={product.images[3].url}
                  alt="Product Image"
                  layout="fill"
                  objectFit="cover"
                />
   <div className="text-white text-xs right-3 absolute bg-discount h-12 w-12 flex justify-center items-center">
{product.discount}%
   </div>
              </div>
              <div className=" flex flex-col space-y-3 h-2/6 w-full">
                <div className=" mt-2 h-6 flex items-center justify-center space-x-20">
                  <h6 className="text-xs font-bold">{product.name}</h6>
                  <h6 className="text-xs font-bold">${product.price}</h6>
                </div>
                <div>
                  <button className="cursor-pointer text-xs text-white bg-black rounded-2xl h-8 w-full">
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
