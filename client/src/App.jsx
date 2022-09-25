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

import ReplyCommentForm from "./components/Comment/ReplyCommentForm";
import QnaForm from "./components/Comment/QnaForm";
import Comments from "./components/Comment/Comments";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<ProductRegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/detail" element={<ProductDetailPage />} />
            <Route path="/comments" element={<Comments></Comments>}></Route>
          </Routes>

          <ReplyCommentForm />
          <QnaForm />
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
