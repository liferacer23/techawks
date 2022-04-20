import Image from "next/image";
import Link from "next/link";
export default function products() {
  return (
      //BODY
    <div className="h-5/6 pt-2 mx-8">
     {/*    Search and links container */}
      <div className="h-full w-full flex flex-col space-y-3">
          {/*Outter Search container */}
        <div className="flex justify-center items-center p-2 ">
            {/* Inner Search Container */}
          <div className="w-4/12 flex items-center justify-center rounded-b-2xl rounded-t-2xl border-2 border-gray-200">
            <div className="flex w-1/12 justify-center items-center rounded-tl-2xl">
              <Image
                className="cursor-pointer"
                src="/assets/icons/search.svg"
                width={15}
                alt="search icon"
                height={15}
              />
            </div>
            <input
              placeholder="Search.."
              className=" outline-0 h-9 w-11/12 rounded-tr-3xl rounded-br-3xl"
              type="text"
            />
          </div>
        </div>
        <div className="flex mb-4 justify-center items-center">
          <div className="flex space-x-16 text-xs font-bold text-gray-500">
            <Link href="/products/furniture">
              <span className="cursor-pointer">Furniture</span>
            </Link>
            <Link href="/products/electronics">
              <span className="cursor-pointer">Electronics</span>
            </Link>
            <Link href="/products/vehicles">
              <span className="cursor-pointer">Vehicles</span>
            </Link>
            <Link href="/products/accesories">
              <span className="cursor-pointer">Accessories</span>
            </Link>
            <Link href="/products/fashion">
              <span className="cursor-pointer">Fashion</span>
            </Link>
          </div>
        </div>
      </div>
      <hr className="mt-8" />
    </div>
  );
}
