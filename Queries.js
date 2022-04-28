export const query1 = `
mutation      {
  createOrder(input:{customerEmailPhone:"binyamg23@gmail.com",country:"ethiopia",customerFullName:"Tracy Mac",customerCity:"mekanisa",customerAddress1:"addis ababa",zipCode:"11655",customerAddress2:"mekanjs"
 }){
   orderId
 }
       
 
       }`;
export const query2 = `

{categories{
  name
  products{
    name
    price
  }
  subCategories{
    name
  }
}
  
}`;
