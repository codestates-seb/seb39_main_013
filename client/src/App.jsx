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
<<<<<<< HEAD
import ItemCard from "./components/Commons/ItemCard";
import MainItemsCategory from "./components/MainItems/MainItemsCategory";
import MainItems from "./components/MainItems/MainItems";



=======
import Footer from "./components/Footer/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
>>>>>>> b21e5fc81133c5712209842f04df1a6adf925b63

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
          </Routes>
          <ItemCard />
          <MainItemsCategory/>
          <MainItems />

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
