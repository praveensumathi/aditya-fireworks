import { Box } from "@mui/material";
import Navbar from "./Navbar";
import About from "./components/about";
import SectionTitle from "./components/sectionTitle";
import Slide from "./components/slide";
import { about, product, slider } from "./utils/utils";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="relative h-[50vh]">
        <section className="banner-image bg-cover bg-no-repeat bg-center h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <Banner title="We are one of the leading sellers of crackers" />
        </section>
      </div>
      <Box sx={{ backgroundColor: "#091629", color: "white", py: 4 }}>
        <section>
          <SectionTitle title="Aditya Fireworks Industries" />
          <Box className="grid container mx-auto grid-rows-1 grid-cols-2 gap-4 ">
            {about.map((item) => (
              <Box className="prepend-dot" style={{ color: "white" }}>
                {item}
              </Box>
            ))}
          </Box>
          <About />
        </section>
        <Box
          className="py-10 sm:px-4"
          sx={{
            backgroundImage: "url(assets/parallax.jpg)",
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
        <section className="container mx-auto">
          <SectionTitle title="All Products" />
          <ProductPage items={product} />
        </section>
        <section className="mt-10">
          <Footer />
        </section>
      </Box>
    </>
  );
}
