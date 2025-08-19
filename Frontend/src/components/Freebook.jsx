import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Cards from './Cards';
import axios from 'axios';

export const Freebook = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get('http://localhost:5000/book');
        console.log(res.data);
        const freeBooks = res.data.filter((data) => data.category === 'Free');
        setBook(freeBooks);
      } catch (error) {
        console.log('error', error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: book.length >= 3,
    speed: 300,
    slidesToShow: Math.min(3, book.length),
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, book.length),
          slidesToScroll: 1,
          infinite: book.length >= 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-gray-900">
      <div>
        <h1 className="font-semibold text-xl pb-2 dark:text-white">Free Offered Courses</h1>
        <p className="dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, quam!
          Totam quaerat minima quidem, nostrum laboriosam natus soluta dolorum est
          dolorem laborum eaque voluptatum, maiores.
        </p>
      </div>

      <div className="mt-4 relative">
        <style>
          {`
            .slick-prev, .slick-next {
              z-index: 10;
              width: 40px;
              height: 40px;
              background: rgba(255, 255, 255, 0.9) !important;
              border-radius: 50%;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .slick-prev:hover, .slick-next:hover {
              background: rgba(255, 255, 255, 1) !important;
            }
            .slick-prev:before, .slick-next:before {
              color: #000 !important;
              font-size: 20px;
            }
            .dark .slick-prev, .dark .slick-next {
              background: rgba(17, 24, 39, 0.9) !important;
            }
            .dark .slick-prev:hover, .dark .slick-next:hover {
              background: rgba(17, 24, 39, 1) !important;
            }
            .dark .slick-prev:before, .dark .slick-next:before {
              color: #fff !important;
            }
            .slick-prev {
              left: -20px;
            }
            .slick-next {
              right: -20px;
            }
          `}
        </style>
        {book.length > 0 ? (
          <Slider {...settings}>
            {book.map((item) => (
              <div key={item.id} className="px-2">
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        ) : (
          <p className="dark:text-gray-300">No free books available.</p>
        )}
      </div>
    </div>
  );
};

export default Freebook;