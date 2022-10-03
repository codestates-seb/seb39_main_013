import React from "react";
import Header from "./components/Header/Header";
import GlobalStyled from "./GlobalStyle";
// import GlobalFonts from "./fonts/GlobalFonts";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Commons/ScrollToTop";
import { useSelector } from "react-redux";
import PrivateRoute from "./utils/PrivateRoute";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductRegisterPage from "./pages/ProductRegisterPage";
import ShopPage from "./pages/ShopPage";
import MyPage from "./pages/MyPage";
import CartPage from "./pages/CartPage";
import { dataQuestions } from "./components/Comment/dataQuestions";
import { dataReviews } from "./components/Comment/dataReviews";
import { dataAnswers } from "./components/Comment/dataAnswers";
import { useEffect } from "react";

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log("첫페이지인가");
  useEffect(() => {
    if (!localStorage.getItem("dataQuestions") && !localStorage.getItem("dataAnswers") && !localStorage.getItem("dataReviews")) {
      //처음에 로컬 스토리지가 없는 경우에
      localStorage.setItem("dataQuestions", JSON.stringify(dataQuestions));
      localStorage.setItem("dataAnswers", JSON.stringify(dataAnswers));
      localStorage.setItem("dataReviews", JSON.stringify(dataReviews));
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<PrivateRoute isLogin={isLogin} component={<LoginPage />} />} />
            <Route path="/signup" element={<PrivateRoute isLogin={isLogin} component={<SignUpPage />} />} />
            <Route path="/detail/:id" element={<ProductDetailPage />} />
            <Route path="/product-register" element={<PrivateRoute isLogin={isLogin} component={<ProductRegisterPage />} />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/mypage" element={<PrivateRoute isLogin={isLogin} component={<MyPage />} />} />
            <Route path="/cart" element={<PrivateRoute isLogin={isLogin} component={<CartPage />} />} />
          </Routes>
        </MainContainer>
        <Footer />
        <ToastContainer position="top-center" draggable />
      </BrowserRouter>
      <GlobalStyled />
    </div>
  );
}

const MainContainer = styled.main`
  width: 100%;
  /* font-family: "Noto Sans KR", sans-serif; */
`;

export default App;
