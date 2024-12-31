import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Slide = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoPlaySpead: 80,
    autoplay: true,
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
              p: 2,
              backgroundColor: "#091629",
              color: "white",
            }}
          >
            <CardMedia
              component="img"
              src={item.imageUrl}
              alt={item.title}
              className="h-52 w-full p-1"
              sx={{
                backgroundImage: "url(assets/cardbackground-1.png)",
                objectFit: "contain",
              }}
            />
            <CardContent>
              <Typography
                className="py-2 text-center"
                sx={{ fontWeight: 500, fontSize: "30px" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" className="py-2 text-justify">
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
