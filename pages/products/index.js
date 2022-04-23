/* 

import { gql} from "@apollo/client";
import client from '../../apolloClient';
import ProductsLayout from "../../components/ProductsLayout";
export default function Products({ children, results }) { 
  const { data, loading, error } = useQuery(QUERY);
   console.log(results); 
  return (
    <ProductsLayout results={results}/>
  ); 
}


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
 
 */