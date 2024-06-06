import { Footer } from "@components/footer/Footer";
import { Container } from "../components/UI/Container";
import { Outlet } from "react-router-dom";
import { Nav } from "@components/nav/Nav";

export const GuestLayout = () => {
  return (
    <Container>
      <Nav />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};
