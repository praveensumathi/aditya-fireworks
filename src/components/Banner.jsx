import React from "react";

export default function Banner({ title }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl text-shadow relative text-white font-extrabold leading-tight text-shadow-custom">
        {title}
      </h2>
    </div>
  );
}
