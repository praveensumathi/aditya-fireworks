import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";

const ProductPage = ({ items }) => {
  return (
    <Box className="mx-auto text-center" sx={{ padding: 2 }}>
      <Grid2 container spacing={4}>
        {items.map((item, index) => (
          <Grid2 size={{ xs: 12, md: 3 }} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 5 }}>
              <CardMedia
                component="img"
                src={item.imageUrl}
                alt={item.title}
                className="h-64 w-full object-contain"
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProductPage;
