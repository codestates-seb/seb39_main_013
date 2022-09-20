import React from "react";
import Header from "./components/Header/Header";
import GlobalStyled from "./GlobalStyle";
import GlobalFonts from "./fonts/GlobalFonts";
import styled from "styled-components";
import ProductRegisterPage from "./pages/ProductRegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <MainContainer>
          <Routes>
            <Route path="/" element={<ProductRegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </MainContainer>
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
