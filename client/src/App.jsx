import React from "react";
import Header from "./components/Header/Header";
import GlobalStyled from "./GlobalStyle";
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
    </div>
  );
}

const MainContainer = styled.main`
  width: 100%;
`;

export default App;
