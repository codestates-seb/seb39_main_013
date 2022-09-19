import React from "react";
import Header from "./components/Header/Header";
import GlobalStyled from "./GlobalStyle";
import styled from "styled-components";
<<<<<<< HEAD
import ProductRegisterForm from "./components/ProductRegister/ProductRegisterForm";
=======

>>>>>>> 9e7a9f920cc542f5761a8736456fdfbb2c49c4f7

function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
      <MainContainer>
        <ProductRegisterForm />
      </MainContainer>
=======
      <MainContainer></MainContainer>
>>>>>>> 9e7a9f920cc542f5761a8736456fdfbb2c49c4f7
      <GlobalStyled />
    </div>
  );
}

const MainContainer = styled.main`
  width: 100%;
`;

export default App;
