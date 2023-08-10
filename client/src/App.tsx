import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
