import React from "react";
import Header from "./components/Header/Header";
import GlobalStyled from "./GlobalStyle";
import GlobalFonts from "./fonts/GlobalFonts";
import styled from "styled-components";
import ProductRegisterPage from "./pages/ProductRegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
import MainPage from "./pages/MainPage";
import ScrollToTop from "./components/Commons/ScrollToTop";
import ShopPage from "./pages/ShopPage";
import MyPage from "./pages/MyPage";
import PrivateRoute from "./utils/PrivateRoute";
// import PrivateRoute from "./utils/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route
              path="/login"
              element={
                <PrivateRoute isLogin={isLogin} component={<LoginPage />} />
              }
            />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute isLogin={isLogin} component={<CartPage />} />
              }
            />
            <Route path="/detail" element={<ProductDetailPage />} />
            <Route path="/product-register" element={<ProductRegisterPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </MainContainer>
        <Footer />
      </BrowserRouter>
      <GlobalStyled />
      <GlobalFonts />
    </div>
  );
}

const MainContainer = styled.main`
  width: 100%;
  font-family: "GmarketSansMedium";
`;

export default App;
