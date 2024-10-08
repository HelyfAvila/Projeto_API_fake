import React, { useContext } from 'react';
//import product context
import { ProductContext } from '../contexts/ProductContext';
//import components
import Product from '../components/Product';
//import hero
import Hero from '../components/Hero';
const Home = () => {
  //get products 
  const { products } = useContext(ProductContext);
  // get produtos pelas IDs das categorias
  const filteredProducts = products.filter(item => {
    return item.category.name === 'Clothes' || 
           item.category.name === 'Electronics' ||
           item.category.name === 'Furniture' || 
           item.category.name === 'Shoes' ||
           item.category.name === 'Miscellaneous' ||
           item.category.name === 'Sapatos-Sapatem' || 
           item.category.name === 'Carteiras-Sapatem' ||
           item.category.name === 'Cintos-Sapatem';
  });
   
  return (
    <div>
      <Hero />
    <section className='py-16'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 x1:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;
