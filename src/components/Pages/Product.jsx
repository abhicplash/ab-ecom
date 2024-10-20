import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import "./Products.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getPRoductData();
  }, []);
  async function getPRoductData() {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
  }
  return (
    <Layout>
      <div className="product-container">
        {products.map((list, index) =>
          <div key={index} className="productcard">
            <img src={list.image} alt="" className="imgproduct" />
            <h4 className="product-head">
              {list.title}
            </h4>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Product;
