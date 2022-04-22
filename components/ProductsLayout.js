import Image from "next/image";
import Link from "next/link";


export default function ProductsLayout({ children, results }) {
/*   const { data, loading, error } = useQuery(QUERY);*/
  console.log(results); 
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
                src="/assets/Icons/search.svg"
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
          {results.categories.map((payload)=>{
    return(
      <Link key={payload.categoryId} href={`products/product/${payload.categoryId}`}>
      <span className="cursor-pointer">{payload.name}</span>
    </Link>

    )
  })}
          </div>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="flex items-center space-x-4 justify-center w-full h-full">
        <div className=" h-100 w-1/6 flex flex-col space-y-3">
          {/* Left Container */}
          <div className=" flex flex-col items-left mt-2 justify-center">
            {/* Left-Container-Top */}
            <h5 className="text-xs font-bold">
              Filter <hr className="mt-2" />{" "}
            </h5>
            {/* Filter Items */}
            <div className=" flex items-center space-x-1 mt-1">
              <input type="checkbox" name="sofas" value="Sofas" />
              <label className="text-xs" htmlFor="sofas">
                Sofas
              </label>
            </div>
          </div>
          <hr className="mt-2" />
          {/* Body Right */}
        </div>
        <div className="w-5/6">{children}</div>
      </div>
    </div>
  );
}

