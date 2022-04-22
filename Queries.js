export const query1 = `
{categories{
  name
  products{
    name
    price
    images{
      url
    }
  }
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
