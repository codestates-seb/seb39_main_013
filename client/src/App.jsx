import React from "react";
import Header from "./components/Header/Header";
import GlobalStyled from "./GlobalStyle";
import styled from "styled-components";
import SubBanner from "./components/SubBanner/Subbanner";


function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer></MainContainer>
      <SubBanner/>
      <GlobalStyled />
    </div>
  );
}

const MainContainer = styled.main`
  width: 100%;
`;

export default App;
