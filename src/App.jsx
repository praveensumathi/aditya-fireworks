import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./components/about";
import SectionTitle from "./components/sectionTitle";
import Slide from "./components/slide";
import { product, slider } from "./utils/utils";
import ProductPage from "./components/ProductPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          mt: 3,
        }}
        maxWidth={false}
      >
        <section className="container">
          <div className="py-4">
            <SectionTitle title="About Us" />
          </div>
          <div className="pb-10">
            <SectionTitle title="Aditya Fireworks Industries" />
          </div>
          <About />
        </section>
        <section className="container mx-auto py-10">
          <div className="p-10">
            <SectionTitle title="Products" />
          </div>
          <Slide items={slider} />
        </section>

        <section className="container">
          <div className="pb-10">
            <SectionTitle title="Products Page" />
          </div>
          <ProductPage items={product} />
        </section>
      </Container>
      <Footer />
    </>
  );
}
