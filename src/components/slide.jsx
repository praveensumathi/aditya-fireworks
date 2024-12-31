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
    slidesToShow: 3.8,
    slidesToScroll: 1,
    autoPlaySpead: 300,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200, // Extra large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box className="mx-auto">
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card
            className="rounded-[10px]"
            key={index}
            sx={{ maxWidth: 345, boxShadow: 2, height: 600 }}
          >
            <CardMedia
              component="img"
              src={item.imageUrl}
              alt={item.title}
              className="h-64 w-full object-cover p-4"
            />
            <CardContent>
              <Typography
                className="py-2 text-center"
                sx={{ fontWeight: 500, fontSize: "30px" }}
              >
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
