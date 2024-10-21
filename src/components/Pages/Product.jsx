import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import "./Products.css";
import { Link } from "react-router-dom";

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
          <div key={index}>
            <div className="singleCard">
              <div className="productImgcard">
                <Link to={`/product/${list.id}`}>
                  <div className="cardshadow">
                    <button className="AddToCart">Add to cart</button>
                  </div>
                </Link>
                <img src={list.image} alt="" className="imgproduct" />
              </div>
            </div>
            <div className="productpricename-details">
              <span className="product-head">
                {list.title.slice(0, 23)}
              </span>
              <span className="price">
                ${list.price}
              </span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Product;
