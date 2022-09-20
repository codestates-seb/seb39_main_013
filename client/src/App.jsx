import React from "react";
import Header from "./components/Header/Header";
import GlobalStyled from "./GlobalStyle";
import styled from "styled-components";

import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer></MainContainer>
      <Footer/>
      <GlobalStyled />
    </div>
  );
}

const MainContainer = styled.main`
  width: 100%;
`;

export default App;
