import { Image } from "@mui/icons-material";

function About() {
  return (
    <div className="grid grid-rows-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 place-items-center">
      <img
        src={"/assets/aboutus.avif"}
        alt="crackers"
        width={400}
        height={400}
        className="object-cover"
      />
      <div className="font-semibold text-sm md:text-lg md:pl-10 leading-loose text-white">
        <p className="text-justify">
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
        </p>
      </div>
    </div>
  );
}

export default About;
