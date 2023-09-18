import React from "react";
import logo from "../img/logo.PNG"
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <nav class="navbar bg-light shadow">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img alt="company logo" src={logo}></img>
        </a>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2 searchBar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <a className="nav-link"><i class="bi bi-search"></i></a>
          <a className="nav-link"><i className="bi bi-house-fill"></i></a>
          <a className="nav-link"><i class="bi bi-heart"></i></a>
          <a className="nav-link"><i class="bi bi-circle"></i></a>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
