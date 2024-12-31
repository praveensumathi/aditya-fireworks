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
      <Box
        sx={{
          px: 6,
          background: "black",
        }}
      >
        <section className="container mx-auto">
          {/* <div className="py-4">
            <SectionTitle title="About Us" />
          </div> */}
          <div className="pb-10">
            <SectionTitle title="Aditya Fireworks Industries" />
          </div>
          <About />
        </section>
        <section className="py-10">
          <div className="py-10">
            <SectionTitle title="Products" />
          </div>
          <Slide items={slider} />
        </section>

        <section className="container mx-auto">
          <div className="pb-10">
            <SectionTitle title="Products Page" />
          </div>
          <ProductPage items={product} />
        </section>

        <section className="container mx-auto">
          <div className="pb-10">
            <SectionTitle title="Footer" />
          </div>
          <Footer />
        </section>
      </Box>
    </>
  );
}
