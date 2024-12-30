import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Slide = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true, // Enable center mode
    centerPadding: "0", // Ensure no padding on the left side
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
    <Box className="m-auto text-center">
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345, boxShadow: 3, height: 600 }}>
            <CardMedia
              component="img"
              src={item.imageUrl}
              alt={item.title}
              className="h-64 w-full object-cover p-4"
            />
            <CardContent>
              <Typography variant="h6" className="py-2 font-extrabold text-3xl">
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="py-2 text-justify "
              >
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Slide;
