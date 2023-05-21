import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import LogoWrd from '../img/bg-icon-removebg-preview.png';
import ShoppingCartIcon from '../img/cartlogo.png';

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
        <img src={LogoWrd} className='w-[60px]'></img>
      </div>
    </Link>
    
    <div 
    onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
      <img src={ShoppingCartIcon} className='w-[60px]'></img>
      <div className='bg-red-500 absolute right-1 bottom-9 text-[12px] 
      w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
        {itemAmount}
      </div>
    </div>
    </div>
  </header>
  );
};

export default Header;
