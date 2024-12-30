import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        <Button variant="contained">Contained</Button>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Container>
      <Footer />
    </>
  );
}
