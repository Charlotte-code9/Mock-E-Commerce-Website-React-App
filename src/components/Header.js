import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { CartContext } from '../contexts/CartContext';
import Logo from '../img/bg-1.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);
  
  
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
  <header className={`${isActive? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>

    <div className='container mx-auto flex items-center justify-between h-full'>
    <Link to={'/'}>
      <div>
        <img src={Logo} className='w-[60px]'></img>
      </div>
    </Link>
    
    <div 
    onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <ShoppingCartIcon className='text-3xl h-[30px]'/>
      <div className='bg-red-500 absolute -right-2 bottom-3 text-[12px] 
      w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
        {itemAmount}
      </div>
    </div>
    </div>
  </header>
  );
};

export default Header;
