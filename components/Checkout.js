import React from 'react'
import Image from 'next/image';
export default function Checkout({setCheckout}) {
  return (
    <div className='flex flex-col absolute bg-white inset-0 '>
      <div className='mx-5'>
      <div className="w-full h-16 flex items-center justify-start p-2">
        <Image src="/assets/Icons/logo.svg" alt="logo picture" width={100} height={100}/>
      </div>
      <hr />
      <div className="w-full h-fit flex flex-col p-2 space-y-2">
        <div className="flex space-x-28 justify-between">
          <div className="flex flex-col space-y-2 p-2 h-fit shadow-xl items-center-justify-center rounded-xl w-2/6 px-10">
            <div className="flex flex-col space-y-4 h-2/6" >
              <h1 className='text-xs font-bold'>Contact Information</h1>
              <input className='text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11' type="text" placeholder='Email or Phone Number'/>
          </div>
            <div className="flex flex-col space-y-3 h-4/6" >
            <div className="flex flex-col space-y-3 h-4/6" >
              <h1 className='text-xs font-bold'>Shipping Address</h1>
              <div className='w-full flex space-x-2'>
              <input className='text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4' type="text" placeholder='First Name'/>
              <input className='text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4' type="text" placeholder='Last Name'/>
              </div>
              <div className='w-full flex flex-col space-y-3'>
              <input className='text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-full' type="text" placeholder='Adress Line 1'/>
              <input className='text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-full' type="text" placeholder='Adress Line 2'/>
              <input className='text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-full' type="text" placeholder='City/Town'/>
              </div>
              <div className='w-full flex space-x-2'>
              <input className='text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4' type="text" placeholder='Country'/>
              <input className='text-xs font-bold pl-4 border-2 border-gray-300 rounded-xl h-11 w-2/4' type="text" placeholder='Postal'/>
              </div>
              <div className="flex p-2 space-x-2 justify-start items-center">
                <input type="checkbox" id="save" />
                <label className='text-xs font-bold' htmlFor="save">Save this information for next time</label>
              </div>
          </div>
          </div>
          </div>
          <div className="flex flex-col space-y-2 p-2 h-fit shadow-xl shadow-3xl items-center-justify-center rounded-xl w-4/6">
d;sal,l;,dl;,l;,
        </div>
      </div>
      <div className='flex justify-between items-center h-fit p-2  w-2/6'>
      <div onClick={()=>{setCheckout(prev=>!prev)}} className=' cursor-pointer flex space-x-2 h-full justify-center items-center'>
            <Image alt="return to carrt" src="/assets/Icons/arrow_left.svg" width={12} height={12} />
            <h1 className='text-xs font-bold text-gray-400'>RETURN TO CART</h1>
      </div>
      <div className="flex items-center">
        <button className="border-2 border-black-500 rounded-full text-white text-xs bg-black h-9 w-48">COMPLETE PAYMENT</button>
      </div>
      </div>
      </div>
      <hr />
      <div className='flex p-2 space-x-4 justify-start items-center'>
        <span className='cursor-pointer text-xs text-gray-400 '>Refund Policy</span>
        <span className='cursor-pointer text-xs text-gray-400 '>Privacy Policy</span>
        <span className='cursor-pointer text-xs text-gray-400 '>Terms of Service</span>
      </div>
      </div>
      </div>
      
  )
}
