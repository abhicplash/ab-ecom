import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import useProducts from "../../utils/useProducts";
import "./SingleProduct.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const select = useProducts(id);
  const dispath = useDispatch();

  function HandleAdd(items) {
    dispath(addItem(items));
  }

  if (!select || Object.keys(select).length === 0) {
    return (
      <Layout>
        <div className="SingleProduct-container">
          <div
            className="product-wrapper"
            style={{ display: "flex", gap: "2rem" }}
          >
            <div className="shimmer-wrapper shimmer-img">
              <div className="shimmer"></div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="shimmer-wrapper shimmer-title">
                <div className="shimmer"></div>
              </div>
              <div className="shimmer-wrapper shimmer-category">
                <div className="shimmer"></div>
              </div>
              <div className="shimmer-wrapper shimmer-description">
                <div className="shimmer"></div>
              </div>
              <div className="shimmer-wrapper shimmer-button">
                <div className="shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="SingleProduct-container">
        <div className="product-wrapper">
          <div className="productImage-wrapper">
            <img
              src={select.image}
              alt={select.title}
              className="productImage"
            />
          </div>
          <div className="productDetails-wrapper">
            <h1 className="title">{select.title}</h1>
            <h5 className="category">{select.category}</h5>
            <h4 className="description">{select.description}</h4>
            <button className="AddtoCart" onClick={() => HandleAdd(select)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
