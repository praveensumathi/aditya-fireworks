import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import About from "./components/about";
import SectionTitle from "./components/sectionTitle";
import Slide from "./components/slide";
import { product, slider } from "./utils/utils";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#091629", color: "white", py: 4 }}>
        <section>
          <SectionTitle title="Aditya Fireworks Industries" />
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
