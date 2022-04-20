import Image from "next/image";
import Link from "next/link";
export default function Layout({ children }) {
  return (
    <div>
      <nav className="p-2 flex w-screen h-20 justify-between items-center">
        <div className="ml-6 cursor-pointer">
          <Image
            src="/assets/icons/logo.svg"
            alt="Shopify logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex space-x-6 text-xs font-bold">
          <Link href="/">
            <span className="cursor-pointer">Home</span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer">Products</span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer">Contact</span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer">About</span>
          </Link>
        </div>
        <div className="flex mr-6 space-x-3">
          <div className=" relative h-9 w-9 cursor-pointer flex justify-center items-center border-2 border-grey-500 rounded-full">
            <Image
              src="/assets/icons/bag.svg"
              alt="cart bag"
              width={15}
              height={15}
            />
            <span className=" flex justify-center items-center text-xxs font-bold text-white h-3.5 w-3.5 rounded-full top-0 -right-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 absolute">
                3
            </span>
          </div>
          <div className="relative cursor-pointer h-9 w-9 flex justify-center items-center border-2 border-grey-500 rounded-full">
            <Image
              className="rounded-full"
              src="/assets/girl/girl.png"
              alt="Profile picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </nav>
      <hr className="mx-8 w-90" />
      {children}
      <footer></footer>
    </div>
  );
}
