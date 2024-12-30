import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const Slide = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box className="w-full  m-auto">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-100 h-64 object-contain"
            />
            <h3 className="mt-4 font-bold text-lg">{item.title}</h3>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Slide;
