import React from "react";
import logo from "../img/logo.PNG"
import "../css/Navbar.css"
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav class="navbar bg-light shadow">
      <div class="container-fluid">
        <NavLink class="navbar-brand" to="/">
            <img alt="company logo" src={logo}></img>
        </NavLink>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2 searchBar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <NavLink className="nav-link"><i class="bi bi-search"></i></NavLink>
          <NavLink className="nav-link" to="/"><i className="bi bi-house-fill"></i></NavLink>
          <NavLink className="nav-link" to="#"><i class="bi bi-heart"></i></NavLink>
          <NavLink className="nav-link" to="/profile"><i class="bi bi-circle"></i></NavLink>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
