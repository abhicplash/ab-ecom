import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import "./Products.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispath = useDispatch();

   function HandleAdd(items) {
    dispath(addItem(items));
  }

  useEffect(() => {
    getProductData();
  }, []);

  async function getProductData() {
    setLoading(true);
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
    setLoading(false);
  }

  const renderShimmer = () => {
    return Array(6)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="singleCard">
          <div className="productImgcard shimmer-wrapper shimmer-img"></div>
          <div className="productpricename-details">
            <div className="shimmer-wrapper shimmer-text"></div>
            <div
              className="shimmer-wrapper shimmer-text"
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>
      ));
  };

  return (
    <Layout>
      <div className="product-container">
        {loading
          ? renderShimmer()
          : products.map((list) => (
              <div key={list.id}>
                <div className="singleCard">
                  <div className="productImgcard">
                    <Link to={`/product/${list.id}`}>
                      <div className="cardshadow">
                        <button
                          className="AddToCart"
                          onClick={() => HandleAdd(list)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </Link>
                    <img
                      src={list.image}
                      alt={list.title}
                      className="imgproduct"
                    />
                  </div>
                </div>
                <div className="productpricename-details">
                  <span className="product-head">
                    {list.title.slice(0, 23)}
                  </span>
                  <span className="price">${list.price}</span>
                </div>
              </div>
            ))}
      </div>
    </Layout>
  );
};

export default Product;
