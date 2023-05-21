import React, {useState} from 'react';
import Slide1 from '../img/slide1.png';
import Slide2 from '../img/slide2.png';
import Slide3 from '../img/slide3.png';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const Hero = () => {
  const slides = [
    {
      url: Slide1,
    },
    {
      url: 'https://cdn.pixabay.com/photo/2019/02/10/16/38/clothing-3987617_960_720.jpg',
    },
    {
      url: Slide3,
    },

    {
      url: 'https://cdn.pixabay.com/photo/2019/02/10/15/09/clothes-3987460_960_720.jpg',
    },
    {
      url: Slide2,
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
  <section className='h-[620px] bg-gradient-to-l from-[#8d5e43] to-[#C6A78E] bg-no-repeat bg-cover bg-center'>
     <div className='max-w-[1400px] h-[610px] w-full py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 mt-7'
      ></div>
    
      <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowBackIcon onClick={prevSlide} size={30} />
      </div>

      <div className='hidden group-hover:block absolute top-[55%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <ArrowForwardIcon onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <FiberManualRecordIcon fontSize='small' className='cursor-pointer' />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Hero;
