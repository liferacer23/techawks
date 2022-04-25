import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductsLayout({setSearch,results }) {
  /*   const { data, loading, error } = useQuery(QUERY);*/
  //const [searchItem, setSearchItem] = useState("");
  const router = useRouter();
  //console.log(results);
  // console.log(router);

  return (
    //BODY
    <>
      {/* //BODY */}
      <div className="sticky top-[80px] z-40 bg-white h-5/6 pt-2 mx-8">
      <hr  />
        {/*    Search and links container */}
        <div className="h-full w-full flex flex-col space-y-2">
          {/*Outter Search container */}
          <div className="flex justify-center items-center p-2 ">
            {/* Inner Search Container */}
            <div className="  w-4/12 flex items-center justify-center rounded-b-2xl rounded-t-2xl border-2 border-gray-200">
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
          <div className="flex mb-4 justify-center items-center">
            <div className="flex space-x-8 text-xs font-bold text-gray-400">
              {results.categories.map((payload) => {
                return (
                  <Link
                    key={payload.categoryId}
                    href={`/products/product/${payload.categoryId}`}
                    passHref
                  >
                    <div className="p-1 flex flex-col space-y-2 items-center">
                      <span className={`cursor-pointer ${payload.categoryId === router.query.product ? "text-black" : ""}`}>{payload.name}</span>
                      {payload.categoryId === router.query.product ? (
                        <span className="bg-gray-700 h-0.5 w-5 flex justify-center items-center rounded-full"></span>
                      ) : (
                        ""
                      )}
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
