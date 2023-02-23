import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import './styles.scss';

const Directory = props => {
  const slides = [
    {url: 'https://i.ibb.co/PZwGZNB/slide1.webp', title: 'slide 1'},
    {url: 'https://i.ibb.co/d5dDVG7/slide2.webp', title: 'slide 2'}
  ]
  const [currentIndex, setCurrentIndex] = useState(1);

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

  return (
    <div className="directory">
      <div className='max-h-[780px] h-full w-full m-auto relative group'>
        <div 
          className='w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500'
          style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>
      </div>
      {/*
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${"https://i.ibb.co/54GhjdC/ww.webp"})`
          }}
        >
          <Link to="/search/shoes">
            Walter White
          </Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${"https://i.ibb.co/54GhjdC/ww.webp"})`
          }}
        >
          <Link to="/search/clothing">
            Walter White
          </Link>
        </div>
        </div> */}
    </div>);
};

export default Directory;
