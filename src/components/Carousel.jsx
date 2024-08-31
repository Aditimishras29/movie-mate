import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
  const [activeMovie, setActiveMovie] = useState(0);
  const sliderRef = React.useRef(null);

  const movies = [
    {
      title: 'Movie 1',
      description: 'This is the description for Movie 1',
      background: '/assets/movie1-bg.jpg',
      thumbnail: '/assets/movie1-t.jpg',
    },
    {
      title: 'Movie 2',
      description: 'This is the description for Movie 2',
      background: '/assets/movie2-bg.jpg',
      thumbnail: '/assets/movie2-thumb.jpg',
    },
    {
      title: 'Movie 3',
      description: 'This is the description for Movie 3',
      background: '/assets/movie3-bg.jpg',
      thumbnail: '/assets/movie3-thumb.jpg',
    },
    {
      title: 'Movie 4',
      description: 'This is the description for Movie 4',
      background: '/assets/movie4-bg.jpg',
      thumbnail: '/assets/movie4-thumb.jpg',
    },
    {
      title: 'Movie 5',
      description: 'This is the description for Movie 5',
      background: '/assets/movie5-bg.jpg',
      thumbnail: '/assets/movie5-thumb.jpg',
    },
    {
      title: 'Movie 6',
      description: 'This is the description for Movie 5',
      background: '/assets/movie5-bg.jpg',
      thumbnail: '/assets/movie5-thumb.jpg',
    },
    {
      title: 'Movie 7',
      description: 'This is the description for Movie 5',
      background: '/assets/movie5-bg.jpg',
      thumbnail: '/assets/movie5-thumb.jpg',
    },
    {
      title: 'Movie 8',
      description: 'This is the description for Movie 5',
      background: '/assets/movie5-bg.jpg',
      thumbnail: '/assets/movie5-thumb.jpg',
    },
    {
      title: 'Movie 9',
      description: 'This is the description for Movie 5',
      background: '/assets/movie5-bg.jpg',
      thumbnail: '/assets/movie5-thumb.jpg',
    },
    {
      title: 'Movie 10',
      description: 'This is the description for Movie 5',
      background: '/assets/movie5-bg.jpg',
      thumbnail: '/assets/movie5-thumb.jpg',
    },
  ];

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveMovie(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow({ onClick }) {
    return (
      <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 cursor-pointer bg-primary p-2 rounded-full"
        onClick={onClick}
      >
        <FaArrowRight className="text-white" />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 cursor-pointer bg-primary p-2 rounded-full"
        onClick={onClick}
      >
        <FaArrowLeft className="text-white" />
      </div>
    );
  }

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${movies[activeMovie].background})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Movie Information */}
      <div className="relative z-10 text-center text-white pt-20">
        <h1 className="text-4xl font-bold">{movies[activeMovie].title}</h1>
        <p className="text-xl mt-4">{movies[activeMovie].description}</p>
      </div>

      {/* Carousel */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="mx-auto w-3/4">
          <Slider ref={sliderRef} {...settings}>
            {movies.map((movie, index) => (
              <div key={index} className="px-2">
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className={`mx-auto rounded-lg cursor-pointer ${
                    activeMovie === index ? 'border-4 border-loader' : 'border-4 border-transparent'
                  }`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
