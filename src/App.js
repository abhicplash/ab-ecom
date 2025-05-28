import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Product from "./components/Pages/Product";
import SingleProduct from "./components/Pages/SingleProduct";
import PNF from "./components/Pages/PNF";
import ScrollToTop from "./components/Layout/ScrollToTop";
import CartPage from "./components/Pages/CartPage";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about"  element={<About  />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="*" element={<PNF />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
