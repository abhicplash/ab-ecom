import React, { useState } from "react";
import Topbar from "./Topbar";
import { LiaShoppingBagSolid } from "react-icons/lia";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((store) => store.ttb.items);
  const [view, setView] = useState(false);
  return (
    <div>
      <Topbar />
      <div className="navbar-container">
        <Link to={"/"}>
          <h1 className="new-head">NEW</h1>
        </Link>

        {view ? (
          <ul className="list-mob">
            <Link to={"/"}>
              <li>home</li>
            </Link>
            {/* <Link to={"/about"}>
                <li>About</li>
              </Link> */}
            <Link to={"/product"}>
              <li>Products</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
          </ul>
        ) : null}
        <ul className="list-larger">
          <Link to={"/"}>
            <li>home</li>
          </Link>
          {/* <Link to={"/about"}>
            <li>About</li>
          </Link> */}
          <Link to={"/product"}>
            <li>Products</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="navicon-wrapper">
          <Link to={"/cart"}>
            <div className="cart-Logo-wrapper">
              <div className="CartLogo">
                <LiaShoppingBagSolid />
              </div>
              <div className="NoofcartItems">
                <span>{cartItems.length}</span>
              </div>
            </div>
          </Link>
          <RxHamburgerMenu
            className="hamburger"
            onClick={() => {
              setView(!view);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
