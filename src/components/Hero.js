
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Slide1 from '../img/slide1.png';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Hero = () => {
  const slides = [
    {
      url: Slide1,
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
  <section className='h-[620px] bg-gradient-to-l from-[#C6A78E] to-amber-400 bg-no-repeat bg-cover bg-center'>
     <div className='max-w-[1400px] h-[610px] w-full py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 mt-7'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowBackIcon onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowForwardIcon onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-xs cursor-pointer'
          >
            <FiberManualRecordIcon />
          </div>
        ))}
      </div>
    </div>
  </section>
  // <section className='h-[600px]  bg-stone-200 bg-no-repeat bg-cover bg-center py-24'>
  // <div className="w-11/12 xl:w-4/5 h-[350px] m-auto bg-stone-200 rounded-xl">
  //     <div className="w-full h-full flex justify-center items-center">
  //       <div className="w-11/12 xl:w-1/2 p-5 space-y-5">
  //         <h1 className="text-5xl font-semibold">find the perfect gift for everyone on your list.</h1>
  //         <div className="bg-white flex items-center space-x-2 px-5 py-2 rounded-full">
  //           <ShoppingCartIcon size={"1.2rem"}/>
  //           <input className="outline-0 w-full" type="text" placeholder="Search..." />
  //         </div>
  //       </div>
  //       <div className="hidden md:flex p-5">
  //         <img className="w-[400px] h-[400px] border-8 border-gray-500" src={WomanImg} alt="" />
  //       </div>
  //     </div>
  //   </div>
  // </section>
  
  );
};

export default Hero;
