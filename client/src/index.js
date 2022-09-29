import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import store, { persistor } from "./redux/store";
import { queryClient } from "./utils/queryClient";
import { ReactQueryDevtools } from 'react-query/devtools';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </PersistGate>
    </Provider>
  </QueryClientProvider>
);
