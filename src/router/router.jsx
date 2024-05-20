import { UserLayout } from "../layout/UserLayout";
import { MainPage } from "../components/main-page/MainPage";
import { createBrowserRouter } from "react-router-dom";
import { PostingPage } from "@components/posting-page/PostingPage";
import { UserProfile } from "@components/user-profile/UserProfile";
import { ProductDetail } from "@components/main-page/product-detail/ProductDetail";
import { GuestLayout } from "@layout/GuestLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <div>Not found!</div>,
  },
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
    ],
  },

  {
    path: "products",
    element: <GuestLayout />,
    children: [
      {
        path: "detail/:name",
        element: <ProductDetail />,
      },
    ],
  },
]);
export default router;
