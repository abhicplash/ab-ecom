import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Product from "./components/Pages/Product";
import SingleProduct from "./components/Pages/SingleProduct";
import PNF from "./components/Pages/PNF";
import About from "./components/Pages/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<PNF />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
