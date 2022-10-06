import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import store, { persistor } from "./redux/store";
import { queryClient } from "./utils/queryClient";
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from "styled-components";
import { themeList } from "./utils/styleTheme";
import ModalContainer from "./components/Commons/ModalContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={themeList}>
        <App />
        <ModalContainer />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);
