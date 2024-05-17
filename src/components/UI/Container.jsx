import { Nav } from "../nav/Nav";

import { Footer } from "../footer/Footer";
import { SearchInput } from "./Search-input";
import { Category } from "./Category";

export const Container = ({ children }) => {
  return (
    <div className='flex flex-col  gap-10'>
      <Nav />
      <SearchInput />
      <Category />
      <div className='container'>{children}</div>
      <Footer />
    </div>
  );
};
