import Image from "next/image";
import Link from "next/link";
import { gql /* useQuery */ } from "@apollo/client";
import client from "../../../apolloClient";
import ProductsLayout from "../../../components/ProductsLayout";
import ItemContainer from "../../../components/ItemContainer";
export const getServerSideProps = async ({ params }) => {
  const categoryId = params.product.toString();

  const { data } = await client.query({
    query: gql`
      query {
        
          category(categoryId:"${categoryId}"){
                   name
                   subCategories{
                     name
                   }
            products{
              name
              productId
              discount
              price
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
    },
  };
};

export default function Product({ results }) {
  /*   const { data, loading, error } = useQuery(QUERY);*/
  console.log(results);
  return (
    //BODY
    <>
      <ProductsLayout results={results} />
      <div className="h-full pt-2 mx-8">
        <div className=" flex space-x-4 w-full h-full">
          <div className="h-100 w-1/6 flex flex-col space-y-3">
            {/* Left Container */}
            <div className=" flex flex-col items-left mt-2 justify-center">
              {/* Left-Container-Top */}
              <h5 className="text-xs font-bold">
                Filter <hr className="mt-2" />{" "}
              </h5>
              {/* Filter Items */}

              {results.category.subCategories.map((data) => {
                return (
                  <div
                    key={data.categoryId}
                    className=" flex items-center space-x-1 mt-1"
                  >
                    <input type="checkbox" name={data.name} value={data.name} />
                    <label className="text-xs" htmlFor={data.name}>
                      {data.name}
                    </label>
                  </div>
                );
              })}
              <hr className="mt-2" />
            </div>
            {/* Body Right */}
          </div>
          <div className="flex h-full p-2 w-5/6">
            <ItemContainer Items={results.category}/>
          </div>
        </div>
      </div>
    </>
  );
}
