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
      <Box>
        <section>
          {/* <div className="py-4">
            <SectionTitle title="About Us" />
          </div> */}
          <div className="py-10">
            <SectionTitle title="Aditya Fireworks Industries" />
          </div>
          <About />
        </section>
        <Box
          className="py-10"
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
          <div className="py-10">
            <SectionTitle title="Products" />
          </div>

          <Slide items={slider} />
        </Box>

        <section>
          <div className="pb-10">
            <SectionTitle title="Products Page" />
          </div>
          <ProductPage items={product} />
        </section>

        <section className="mt-10">
          <Footer />
        </section>
      </Box>
    </>
  );
}
