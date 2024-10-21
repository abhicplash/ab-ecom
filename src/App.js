import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Product from "./components/Pages/Product";
import SingleProduct from "./components/Pages/SingleProduct";
import PNF from "./components/Pages/PNF";
import About from "./components/Pages/About";
import Cart from "./components/Pages/Cart";
import ScrollToTop from "./components/Layout/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<PNF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
