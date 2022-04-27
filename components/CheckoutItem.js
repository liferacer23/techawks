import React from 'react'
import Image from 'next/image';
export default function CheckoutItem() {
  return (
    <><div className=" flex p-2 justify-evenly h-fit mb-4">
          <div className="relative w-28 h-28 rounded-xl">
              <Image className="rounded-xl" src="/assets/girl/girl.png" alt="cart item" layout="fill" objectFit="cover" />
              <span className=" flex justify-center items-center text-xxs text-white h-3.5 w-3.5 rounded-full -top-1 -right-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute">
              3
            </span>
          </div>
          <div className="flex flex-col h-full justify-start space-y-2 p-x w-3/6">
              <h1 className="text-xs font-bold">ONYX WOOD CHAIR</h1>
              <p className="text-xxs font-semibold ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae illo perspiciatis doloremque architecto, sit incidunt odio adipisci velit commodi aperiam expedita doloribus nobis itaque blanditiis, quas, enim quibusdam eaque numquam?</p>
          </div>
          <div className="flex flex-col-p-2 justify-start">
              <h1 className="text-xs font-bold">$2323</h1>
          </div>

      </div><hr className='mx-12' /></>
  )
}
