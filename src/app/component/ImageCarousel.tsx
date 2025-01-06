import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hides navigation arrows for a cleaner look
  };

  const images = [
    '/image/Main Image.png',
    '/image/img1.jpg',
    '/image/img2.jpg',
    '/image/img3.jpg',
    '/image/img4.jpg',
    '/image/img5.png',
    '/image/Main Image2.png',
    '/image/img6.png',
    '/image/img7.png',
    '/image/img8.jpg',
    '/image/img9.jpg',
    '/image/Main Image3.webp',
    '/image/img10.jpg',
    '/image/img11.jpg',
    '/image/img12.jpg',
    '/image/img13.jpg',
    '/image/Main Image4.png',
    '/image/img14.jpg',
    '/image/img15.jpg',
  ];

  return (
    <div className='relative lg:max-w-[1390px] mx-auto px-2'>
      <div className='overflow-hidden rounded-lg shadow-xl'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className='relative  h-[250px] md:h-[460px]'>
              <Image
              quality={100}
                src={image}
                alt={`Slide ${index}`}
                layout='fill'
                objectFit='fill'
                className='rounded-md '
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
