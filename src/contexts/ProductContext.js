import React, {createContext, useState, useEffect, Children} from 'react';

//criação de contexto
export const ProductContext = createContext();

const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([])
  //fetch products
  useEffect(()=> {
    const fetchProducts = async()=>{
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
}


export default ProductProvider;
