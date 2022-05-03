import Image from "next/image";
import Link from "next/link";
import { useRef,useState,useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
export default function ProductsLayout({setSearch,results }) {
  /*   const { data, loading, error } = useQuery(QUERY);*/
  const [products, setProducts] = useState(false);
  const router = useRouter();
  const element=useRef();
  const [x, setX] = useState();
  
  //console.log(results);
  //console.log(element.current.offsetLeft);
  const getPosition = () => {
    const x = element.current.offsetLeft;
    setX(x);
    
    console.log(x)
    
  };

  // Get the position of the red box in the beginning
  useEffect(() => {
    getPosition();
  }, []);
  return (
    //BODY
    <>
      {/* //BODY */}
      <div className=" z-30 sticky top-[80px] z-40 bg-white h-5/6 pt-2 mx-8">
      <hr  />
        {/*    Search and links container */}
        <div className="h-full w-full flex flex-col space-y-2">
          {/*Outter Search container */}
          <div className="flex justify-evenly justify-center items-center p-2 ">
            {/* Inner Search Container */}
            <div onClick={()=>{setProducts(prev=>!prev)}} className="md:hidden relative flex w-[100px] h-[20px] relative">
         <div className="flex p-1 items-center justify-between space-x-2 w-[90px]">
           <h1 className="cursor-pointer text-sm font-bold">Products</h1>
         <Image
                  className="cursor-pointer"
                  src="/assets/Icons/drop.png"
                  width={15}
                  alt="dropicon"
                  height={16} />
         
         </div> 
             <AnimatePresence>{products? 
             <motion.div animate={{y:0,opacity:1}} initial={{y:-200,opacity:0}} exit={{y:-200,opacity:0}} transition={{duration:1}} className="absolute top-9 -right-4 bg-white border-2 border-gray-200 rounded-xl w-[150px] h-[400px] w-25 flex mb-4">
            <div className="w-full h-full flex flex-col space-y-2 text-xs font-bold justify-evenly items-center text-gray-400">
              {results.categories.map((payload) => {
                return (
                  <Link
                    key={payload.categoryId}
                    href={`/products/product/${payload.categoryId}`}
                    passHref
                  >
                    <div  onClick={()=>{setProducts(prev=>!prev)}} className="p-1 flex flex-col space-y-2 items-center">
                      <span onClick={()=>{setProducts(prev=>!prev)}} className={`cursor-pointer ${payload.categoryId === router.query.product ? "text-black" : ""}`}>{payload.name}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>:""}
          </AnimatePresence>
            </div>
            <div className=" w-80 md:w-4/12 flex items-center justify-center rounded-b-2xl rounded-t-2xl border-2 border-gray-200">
              <div className=" flex w-1/12 justify-center items-center rounded-tl-2xl">
                <Image
                  className="cursor-pointer"
                  src="/assets/Icons/search.svg"
                  width={15}
                  alt="search icon"
                  height={15} />
              </div>
              <input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search.."
                className=" outline-0 h-9 w-11/12 rounded-tr-3xl rounded-br-3xl"
                type="text" />
            </div>
          </div>


          <div className="hidden md:flex mb-4 md:justify-center md:items-center">
            <div className="flex space-x-8 text-xs font-bold text-gray-400">
              {results.categories.map((payload) => {
                return (
                  <Link
                    key={payload.categoryId}
                    href={`/products/product/${payload.categoryId}`}
                    passHref
                  >
                    <div ref={element} onClick={()=>{setX(element.current.offsetLeft)}} className="p-1 flex flex-col space-y-2 items-center">
                      <span  className={`cursor-pointer ${payload.categoryId === router.query.product ? "text-black" : ""}`}>{payload.name}</span>
                      <AnimatePresence>
                      {payload.categoryId === router.query.product ? (
                        <motion.span  animate={{x:x-900,opacity:1}} initial={{x:x,opacity:0}}  transition={{duration:1}} className="bg-gray-700 h-0.5 w-5 flex justify-center items-center rounded-full"></motion.span>
                        ) : (
                          ""
                          )}
                          </AnimatePresence>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="w-90" />
      </div></>
  );
}
