import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import App from "./App";
import { store } from "./redux/store";
import { queryClient } from "./utils/queryClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <App />
        </Provider>
    </QueryClientProvider>
);
