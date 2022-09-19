import React from "react";
import MainCarousel from "./components/Carousels/MainCarousel";
import Header from "./components/Header/Header";
import GlobalStyled from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <MainCarousel />
      <GlobalStyled />
    </div>
  );
}

export default App;
