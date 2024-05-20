import { Footer } from "@components/footer/Footer";
import { Container } from "../components/UI/Container";
import { Outlet } from "react-router-dom";
import { Nav } from "@components/nav/Nav";
import { SearchInput } from "@components/UI/Search-input";

export const GuestLayout = () => {
  return (
    <Container>
      <Nav />
      <SearchInput />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};
