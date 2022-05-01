import { useState, useEffect } from "react";
import { gql /* useQuery */ } from "@apollo/client";
import client from "../../../apolloClient";
import ProductsLayout from "../../../components/ProductsLayout";
import ItemContainer from "../../../components/ItemContainer";
import { AnimatePresence, motion } from "framer-motion";
export const getServerSideProps = async ({ params }) => {
  const categoryId = params.product.toString();

  const { data } = await client.query({
    query: gql`
      query {
        
          category(categoryId:"${categoryId}"){
                   name
                   subCategories{
                     name
                     subCategoryId
                   }
            products{
              name
              productId
              discount
              price
              unitsSold
              description
              subCategoryId
              images{
        productId
                url
              }
            }
              }
        
         
         categories {
          categoryId
          name
        }
      }
     
      
    `,
  });
  return {
    props: {
      results: data,
      params: params,
    },
  };
};

export default function Product({ results, params }) {
  /*   const { data, loading, error } = useQuery(QUERY);*/
  const [filter, setFilter] = useState([]);
  const data = [...results.category.products];
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  //console.log(results);
  //console.log(filter);
  //console.log(search);
  //console.log(sort);

  useEffect(() => {
    setFilter((prev) => (prev = []));
  }, [params.product]);

  const checkBoxHandler2 = (id) => {
    if (filter.includes(id)) {
      return true;
    } else return false;
  };

  const checkBoxHandler = (e) => {
    if (filter.includes(e.target.value)) {
      setFilter(filter.filter((item) => item !== e.target.value));
    } else {
      setFilter([...filter, e.target.value]);
    }
  };
  return (
    //BODY
    <>
      <ProductsLayout setSearch={setSearch} results={results} />
      <motion.div animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:1}} className=" h-full pt-2 mx-8">
    <AnimatePresence>
        <div className="flex space-x-4 w-full h-full">
          <div className="sticky left-0 top-[198px] h-100 overflow-y-scroll w-1/6 flex flex-col space-y-3">
            {/* Left Container */}
            <div className="flex flex-col items-left mt-2 justify-center">
              {/* Left-Container-Top */}
              <h5 className="text-xs font-bold">
                Filter <hr className="mt-2 mx-1" />{" "}
              </h5>
              {/* Filter Items */}

              {results.category.subCategories.map((data) => {
                return (
                  <div
                    key={data.subCategoryId}
                    className=" flex items-center space-x-1 mt-1"
                  >
                    <input
                      checked={checkBoxHandler2(data.subCategoryId)}
                      className="indeterminate:bg-gray-3 checked:bg-red-500"
                      type="checkbox"
                      id={data.name}
                      onChange={(e) => {
                        checkBoxHandler(e);
                      }}
                      name={data.name}
                      value={data.subCategoryId}
                    />
                    <label className="text-xs font-bold" htmlFor={data.name}>
                      {data.name}
                    </label>
                  </div>
                );
              })}
              <hr className="mt-2 mx-1" />
              <div className=" flex flex-col space-y-1 mt-1">
                <h6 className="text-xs font-bold">Sort</h6>
                <div className="flex items-center space-x-1">
                  <input
                    name="sort"
                    type="radio"
                    id="discounts"
                    value="discount"
                    onClick={(e) => {
                      setSort(e.target.value);
                    }}
                  />
                  <label className="text-xs font-bold" htmlFor="discounts">
                    Discounts
                  </label>
                </div>
                <div className="flex items-center space-x-1">
                  <input
                    name="sort"
                    type="radio"
                    id="best selling"
                    value="best selling"
                    onClick={(e) => {
                      setSort(e.target.value);
                    }}
                  />
                  <label className="text-xs font-bold" htmlFor="best selling">
                    Best Selling
                  </label>
                </div>
                <div className="flex items-center space-x-1">
                  <input
                    name="sort"
                    type="radio"
                    id="inceasing"
                    value="increasing"
                    onClick={(e) => {
                      setSort(e.target.value);
                    }}
                  />
                  <label className="text-xs font-bold" htmlFor="increasing">
                    Price, Low to High
                  </label>
                </div>
                <div className="flex items-center space-x-1">
                  <input
                    name="sort"
                    type="radio"
                    id="decreasing"
                    value="decreasing"
                    onClick={(e) => {
                      setSort(e.target.value);
                    }}
                  />
                  <label className="text-xs font-bold" htmlFor="decreasing">
                    Price, High to Low
                  </label>
                </div>
              </div>
            </div>
            {/* Body Right */}
          </div>
       
              <ItemContainer
                search={search}
                setFilter={setFilter}
                filter={filter}
                Items={
                  sort === "discount"
                    ? data.sort((a, b) => (b.discount > a.discount ? 1 : -1))
                    : sort === "best selling"
                    ? data.sort((a, b) => (b.unitsSold > a.unitsSold ? 1 : -1))
                    : sort === "increasing"
                    ? data.sort((a, b) => (a.price > b.price ? 1 : -1))
                    : sort === "decreasing"
                    ? data.sort((a, b) => (b.price > a.price ? 1 : -1))
                    : data
                }
              />
           
        </div>
              </AnimatePresence>
      </motion.div>
    </>
  );
}
