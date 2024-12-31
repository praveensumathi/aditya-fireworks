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
          <img
            src={"/assets/ADITYALOGO.png"}
            alt="crackers"
            className="object-cover col-span-1 img-fluid"
            width={200}
          />
        </div>
        <div className="text-justify p-5">
          Welcome to Aditya Fireworks Industries, where the magic of fireworks
          comes alive! As pioneers in the art of creating awe-inspiring
          pyrotechnic displays, we bring you a symphony of colors, lights, and
          sounds that ignite the sky and hearts alike. With a legacy spanning 2
          years, we have mastered the craft of crafting mesmerizing fireworks
          that captivate audiences of all ages.
          <br />
          <br /> From dazzling flowerpots to soaring rockets, from the crackle
          of bijili crackers to the sweetness of chakkara, each of our products
          is a testament to our commitment to quality, safety, and innovation.
          <br />
          <br />
          Join us on a journey of celebration and wonder, where every burst of
          light sparks joy and leaves lasting memories. <br /> <br />
          Welcome to the world of Aditya Fireworks Industries, where every
          moment is a celebration!
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
