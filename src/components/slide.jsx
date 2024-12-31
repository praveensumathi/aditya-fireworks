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
    autoPlaySpead: 300,
    autoplay: true,
    initialSlide: 0,
    slidesToShow: 4.3,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2.6,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3.3,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <Box>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              height: 600,
              borderRadius: 5,

              objectFit: "cover",
              objectPosition: "center",
            }}
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
