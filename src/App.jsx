import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./components/about";
import SectionTitle from "./components/sectionTitle";
import Slide from "./components/slide";
import { slider } from "./utils/utils";

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
        <section className="container">
          <div className="pb-10">
            <SectionTitle title="Products" />
          </div>
          <Slide items={slider} />
        </section>
        <Button variant="contained">Contained</Button>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Container>
      <Footer />
    </>
  );
}
