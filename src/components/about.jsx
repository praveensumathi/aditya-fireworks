import { Box } from "@mui/material";

function About() {
  return (
    <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-2 ">
      <img
        src={"/assets/wala01.png"}
        alt="crackers"
        className="object-cover col-span-1 img-fluid self-end hidden md:block"
        width={300}
      />
      <div className="font-semibold text-sm md:text-lg leading-loose md:col-span-2 py-3">
        <div className="justify-center hidden xl:flex">
          {/* <img
            src={"/assets/ADITYALOGO.png"}
            alt="crackers"
            className="object-cover col-span-1 img-fluid"
            width={200}
          /> */}
        </div>
        <div className="text-justify p-5">
          Welcome to Aditya Fireworks Industries, where the magic of fireworks
          comes alive! With 2 years of expertise, we craft dazzling pyrotechnic
          displays that ignite the sky with vibrant colors, brilliant lights,
          and mesmerizing sounds. From sparkling flowerpots to soaring rockets
          and crackling bijili crackers, our products are a perfect blend of
          quality, safety, and innovation. <br /> <br />
          Each creation is designed to bring joy, wonder, and unforgettable
          moments to your celebrations. Experience the artistry of fireworks
          with Aditya Fireworks Industries, where every spark lights up a memory
          and every moment becomes a celebration!
        </div>
      </div>
      <img
        src={"/assets/bomb.png"}
        alt="crackers"
        className="object-cover col-span-1 img-fluid self-end hidden md:block"
      />
    </div>
  );
}

export default About;
