import React, {useContext} from 'react';

import {useParams} from 'react-router-dom';

import {CartContext} from '../contexts/CartContext';

import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  const product = products.find(item => {
    return item.id === parseInt(id);
  })

  if(!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    )
  }

  const {title, price, description, image} = product;

  return (

    <section className='min-w-screen min-h-screen bg-gradient-to-l from-[#C6A78E] to-amber-400 bg-no-repeat flex items-center p-5 lg:p-10 overflow-hidden relative'>
    <div class="w-full max-w-6xl rounded bg-white shadow-xl mt-14 p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                <img className='max-w-[200px] max-h-[350px] lg:max-w-sm' src={image} alt=''/>
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5">{title}</h1>
                    <p class="text-sm">{description} </p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                      
                        <span class="font-bold text-5xl leading-none align-baseline">$ {price}</span>
                    
                    </div>
                    <div class="inline-block align-bottom">
                        <button onClick={()=> addToCart(product, product.id)} class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>

  );
};

export default ProductDetails;
