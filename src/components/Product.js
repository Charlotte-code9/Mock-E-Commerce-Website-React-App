import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import PageviewIcon from '@mui/icons-material/Pageview';
import AddtoCart from '../img/addtocart.png';

const Product = ({product}) => {
  const { addToCart } = useContext(CartContext)
  const {id, image, category, title, price } = product;

  return( 
  <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative 
    overflow-hidden group transition rounded-2xl bg-white drop-shadow-md'>
        
        <div className='w-full h-full flex justify-center items-center '>
            <div className='w-[200px] mx-auto flex justify-center items-center'>
                <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt=''/>
            </div>
        </div>

        <div className='absolute top-5 -right-11 group-hover:right-5 p-2 flex flex-col items-center 
        justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
            <button onClick={() => addToCart(product,id)}>
                <div className='flex justify-center items-center text-white w-11 h-11 bg-[#8d5e43] rounded-full'>
                    <img src={AddtoCart} alt='Add to cart'/>
                </div>
            </button>
            <Link to={`/product/${id}`} className='flex justify-center items-center  text-white w-11 h-11 bg-[#8d5e43]  rounded-full'>
                <PageviewIcon fontSize='large'/>
            </Link>
        </div>

    </div>
    
    <div>
        <div className='text-sm capitalize mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
            <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
    </div>
    
  </div>

  
  );
};

export default Product;