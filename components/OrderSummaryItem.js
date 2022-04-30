import { useState } from 'react';
import Image from 'next/image';

export default function OrderSummaryItem({item}) {
  const price = item.price * item.quantity;
  const [finalPrice,setFinalPrice]=useState(price);
 
  return (
    <div className=" flex p-2 justify-between w-full  h-fit mb-4">
    <div className="relative w-28 h-28 rounded-xl">
      <Image
        className="rounded-xl"
        src={item.images[3].url}
        alt="cart item"
        layout="fill"
        objectFit="cover"
      />
      <span className=" flex justify-center items-center text-xxs text-white h-3.5 w-3.5 rounded-full -top-1 -right-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute">
        {item.quantity}
      </span>
    </div>

    <div className="flex h-full justify-start w-3/6  ">
      <div className="flex flex-col w-5/6">
        <h1 className="text-xs font-bold">{item.name}</h1>
        <p className="text-xxs mt-1 w-4/6 font-semibold ">
{item.description}
        </p>
      </div>
      <div className="flex flex-col-p-2 justify-start">
        <h1 className="text-xs font-bold"> ${finalPrice}</h1>
      </div>
    </div>
  </div>
  )
}
