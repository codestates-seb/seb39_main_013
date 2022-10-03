/* eslint-disable react/react-in-jsx-scope */
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import MyPage from "../pages/MyPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductRegisterPage from "../pages/ProductRegisterPage";
import ShopPage from "../pages/ShopPage";
import SignUpPage from "../pages/SignUpPage";

export const routerList = [
  {
    id: 1,
    path: "/",
    isPrivate: false,
    element: <MainPage />,
  },
  {
    id: 2,
    path: "/login",
    isPrivate: true,
    element: <LoginPage />,
  },
  {
    id: 3,
    path: "/signup",
    isPrivate: true,
    element: <SignUpPage />,
  },
  {
    id: 4,
    path: "/detail/:id",
    isPrivate: false,
    element: <ProductDetailPage />,
  },
  {
    id: 5,
    path: "/product-register",
    isPrivate: true,
    element: <ProductRegisterPage />,
  },
  {
    id: 6,
    path: "/shop/*",
    isPrivate: false,
    element: <ShopPage />,
  },
  {
    id: 7,
    path: "/mypage/*",
    isPrivate: true,
    element: <MyPage />,
  },
  {
    id: 8,
    path: "/cart",
    isPrivate: true,
    element: <CartPage />,
  },
  {
    id: 9,
    path: "*",
    isPrivate: false,
    element: <NotFoundPage />,
  },
];
