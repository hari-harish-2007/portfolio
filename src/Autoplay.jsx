import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
  { img: '/Assesst/tailwind.png' },
  { img: '/Assesst/react.png' },
  { img: '/Assesst/java.webp' },
  { img: '/Assesst/mat.png' },
  { img: '/Assesst/git.jpg' },
  { img: '/Assesst/css-3.png' },
  { img: '/Assesst/cpr.png' },
  { img: '/Assesst/icons8-html-logo-48.png' },
];

function Autoplay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container mt-20 overflow-hidden ">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="rounded-full h-[120px]  w-[130px] border shadow-xl overflow-hidden">
              <img
                className="w-full h-full object-cover bg-white"
                src={item.img}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Autoplay;
