import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="../imgs/logo.png" alt="" />
        </div>
        <div className="logo-txt">
          <h1>
            Ministry of sports and cultural activities Government of India
          </h1>
          <h2>Government of India</h2>
        </div>
        <div className="nav-btns" >
          <Link to="/adminLogin">
            <div className="btn" >Admin</div>
          </Link>
          <Link to="/">
            <div className="btn">Artist</div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
