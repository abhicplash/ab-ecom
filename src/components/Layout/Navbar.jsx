import React, { useState } from "react";
import Topbar from "./Topbar";
import { LiaShoppingBagSolid } from "react-icons/lia";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div>
      <Topbar />
      <div className="navbar-container">
        <Link to={"/"}>
          <h1 className="new-head">NEW</h1>
        </Link>

        {view
          ? <ul className="list-mob">
              <Link to={"/"}>
                <li>home</li>
              </Link>
              <Link to={"/about"}>
                <li>About</li>
              </Link>
              <Link to={"/product"}>
                <li>Products</li>
              </Link>
              <Link to={"/contact"}>
                <li>Contact</li>
              </Link>
            </ul>
          : null}
        <ul className="list-larger">
          <Link to={"/"}>
            <li>home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/product"}>
            <li>Products</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        <div className="navicon-wrapper">
          <Link to={"/cart"}>
            <LiaShoppingBagSolid />
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
