import React, {useContext, useState} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import { Search } from '@mui/icons-material';

const Home = () => {

  const { filteredProducts, handleSearchInputChange } = useContext(ProductContext);

  const onSearchInputChange = (e) => {
    handleSearchInputChange(e.target.value);
  };

  return (
  <div>
    <Hero />
    <section className='py-10'>
      <div className='container mx-auto'>
      <div class="flex flex-col justify-center items-center ">
      <h1 class="text-5xl xl:text-5xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white mb-10">
  Our Top <span class="text-custom hover:brightness-50 dark:text-purple-500 animate-pulse"> Collection </span>
</h1>
      </div>

        <div className='relative flex-grow mb-4'>
                <label htmlFor='search-input' className='sr-only'>
                  Search
                </label>
                <input
                  id='search-input'
                  className='w-full py-2 pl-3 pr-10 text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  type='text'
                  placeholder='Search...'
                  onChange={onSearchInputChange}
                />
                <div className='absolute top-0 right-0 flex items-center h-full pr-3 pointer-events-none'>
                  <Search className='w-5 h-5 text-gray-500' />
                </div>
              </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] 
        max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
            ))}
        </div>

        
      </div>
    </section>
  </div>
  );
};

export default Home;
