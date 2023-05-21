import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';
import { ArrowBack, Search } from '@mui/icons-material';

const Home = () => {

  const { products } = useContext(ProductContext);
  
  const { filteredProducts, handleSearchInputChange } = useContext(ProductContext);

  // Function to handle search input change
  const onSearchInputChange = (e) => {
    handleSearchInputChange(e.target.value);
  };

  return (
  <div>
    <Hero />
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className="bg-gray-200 flex items-center space-x-2 px-5 py-2 rounded-full mb-4">
              <Search size={"1.2rem"}/>
              <input
                className="outline-0 w-full bg-gray-200"
                type="text"
                placeholder="Search..."
                onChange={onSearchInputChange}
              />
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
