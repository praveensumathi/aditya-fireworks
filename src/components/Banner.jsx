import { Box } from "@mui/material";
import React from "react";

export default function Banner({ title, subtitle, image }) {
  return (
    <div className="text-center">
      <div className="flex justify-center">{image}</div>
      <h2 className="text-4xl md:text-6xl relative text-white font-extrabold leading-tight -mt-7">
        {title}
      </h2>
      <h5 className="text-xl relative text-white font-extrabold leading-tight p-5">
        {subtitle}
      </h5>
    </div>
  );
}
