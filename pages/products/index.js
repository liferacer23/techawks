import Image from "next/image";
import Link from "next/link";
import { gql, /* useQuery */ } from "@apollo/client";
import client from '../../apolloClient';
import ProductsLayout from "../../components/ProductsLayout";
export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
       categories {
         categoryId
         name
       }
      }
    `,
  });
  return {
    props: {
      results: data
    },
  };
};

export default function Products({ children, results }) {
  console.log(results); 
  return (
   <ProductsLayout results ={results}/>
  
  );
}

