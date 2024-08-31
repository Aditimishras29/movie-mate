import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LatestReleasesCarousel = () => {
  const releases = [
    { title: 'Release 1', placeholder: 'https://placehold.co/200x400' },
    { title: 'Release 2', placeholder: 'https://placehold.co/200x400' },
    { title: 'Release 3', placeholder: 'https://placehold.co/200x400' },
    { title: 'Release 4', placeholder: 'https://placehold.co/200x400' },
    { title: 'Release 5', placeholder: 'https://placehold.co/200x400' },
    { title: 'Release 6', placeholder: 'https://placehold.co/200x400' },
    { title: 'Release 7', placeholder: 'https://placehold.co/200x400' },
    { title: 'Release 8', placeholder: 'https://placehold.co/200x400' },
  ];

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">Latest Releases</h2>
      <Slider {...settings}>
        {releases.map((release, index) => (
          <div key={index} className="px-3">
            <div className="bg-secondary p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={release.placeholder}
                alt={release.title}
                className="rounded-lg mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-xl font-semibold text-center text-white">{release.title}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestReleasesCarousel;
