import { Box } from "@mui/material";
import Navbar from "./Navbar";
import About from "./components/about";
import SectionTitle from "./components/sectionTitle";
import Slide from "./components/slide";
import { about, product, slider } from "./utils/utils";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import SocialMediaIcons from "./components/SocialMediaIcons";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Navbar />
      <SocialMediaIcons />
      <div className="relative h-[50vh]">
        <section
          id="home"
          className="banner-image bg-cover bg-no-repeat bg-center h-full flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <Banner
            image={
              <Box
                component="img"
                sx={{
                  width: isMobile ? "70%" : "100%",
                  maxWidth: isMobile ? 300 : 400,
                  height: "auto",
                }}
                alt="Your logo."
                src={"assets/ADITYALOGO.png"}
              />
            }
            title="Fireworks Industries"
            subtitle="One of the most Trusted & leading fireworks manufacturer in sivakasi"
          />
        </section>
      </div>
      <Box sx={{ backgroundColor: "#091629", color: "white" }}>
        <section id="about">
          <SectionTitle title="Aditya Fireworks Industries" />
          <Box className="grid grid-rows-1 grid-cols-2  md:grid-cols-4 md:text-xl md:pb-4 ">
            {about.map((item, index) => (
              <Box
                key={index}
                className="prepend-dot text-center font-semibold text-white"
              >
                {item}
              </Box>
            ))}
          </Box>
          <About />
        </section>
        <Box
          className="py-10 sm:px-4"
          sx={{
            backgroundImage: "url(/assets/parallax.jpg)",
            objectFit: "contain",
            width: "100%",
            objectPosition: "center",
            height: "auto",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <SectionTitle title="Special Products" />
          <Slide items={slider} />
        </Box>
        <section id="products" className="container mx-auto">
          <SectionTitle title="All Products" />
          <ProductPage items={product} />
        </section>
        <section id="contact" className="mt-10">
          <Footer />
        </section>
      </Box>
    </>
  );
}
