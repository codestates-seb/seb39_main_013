import React from "react";
import Header from "./components/Header/Header";
import GlobalStyled from "./GlobalStyle";
import GlobalFonts from "./fonts/GlobalFonts";
import styled from "styled-components";
import ProductRegisterPage from "./pages/ProductRegisterPage";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <ProductRegisterPage />
      </MainContainer>
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
