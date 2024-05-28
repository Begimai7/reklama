import { UserLayout } from "../layout/UserLayout";
import { MainPage } from "@components/main-page/MainPage";
import { createBrowserRouter } from "react-router-dom";
import { PostingPage } from "@components/posting-page/PostingPage";
import { UserProfile } from "@components/user-profile/UserProfile";
import { ProductDetail } from "@components/main-page/product-detail/ProductDetail";
import { GuestLayout } from "@layout/GuestLayout";
import { FilterProduct } from "@components/main-page/filter-product-page/FilterProduct";
import { Favourites } from "@components/mobile/favourites/Favourites";
import { Chats } from "@components/mobile/chats/Chats";
import { Profile } from "@components/mobile/profile/Profile";
import { PostPage } from "@components/mobile/posting/PostPage";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <UserLayout />,
    errorElement: <div>Not found!</div>,
    children: [
      {
        path: "/user",
        element: <MainPage />,
      },
      {
        path: "dashboard",
        element: <UserProfile />,
      },
      {
        path: "posting-page",
        element: <PostingPage />,
        errorElement: <div>Not found!</div>,
      },
      {
        path: "products/city_id/:id",
        element: <FilterProduct />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "impost",
        element: <PostPage />,
      },
      {
        path: "chats",
        element: <Chats />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/products/detail/:name",
        element: <ProductDetail />,
      },
      {
        path: "products/city_id/:id",
        element: <FilterProduct />,
      },
    ],
  },
]);
export default router;
