import Head from 'next/head'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {motion,AnimatePresence} from 'framer-motion'
import HomeSlider from '../components/HomeSlider';
export default function Home() {

  const [selectedId, setSelectedId] = useState(false)
  const cart = useSelector((state) => state.cart);
  return (
    <div className='flex flex-col mx-5 p-2'>
      <Head>
        <title>techawks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeSlider/>
      <h1 className='text-3xl font-bold text-center'>Welcome to Shoplly</h1>
   
   

 
    </div>
  )
}
