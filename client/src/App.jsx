import React, { useEffect } from "react";
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
import { routerList } from "./utils/Routers";
import { dataQuestions } from "./components/Comment/dataQuestions";
import { dataAnswers } from "./components/Comment/dataAnswers";
import { dataReviews } from "./components/Comment/dataReviews";

function App() {
  const isLogin = useSelector((state) => state.user.isLogin);
  useEffect(() => {
    if (
      !localStorage.getItem("dataQuestions") &&
      !localStorage.getItem("dataAnswers") &&
      !localStorage.getItem("dataReviews")
    ) {
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
            {routerList.map((v) => {
              return (
                <Route
                  key={v.id}
                  path={v.path}
                  element={
                    v.isPrivate ? (
                      <PrivateRoute isLogin={isLogin} component={v.element} />
                    ) : (
                      v.element
                    )
                  }
                />
              );
            })}
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
