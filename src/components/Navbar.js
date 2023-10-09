import React from "react";
import logo from "../img/logo.PNG";
import "../css/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = (ev)=>{
    ev.preventDefault(); 
    localStorage.removeItem("token");
    console.log("Navbar: user::", user);
    debugger;
    dispatch({type:"Login_Failed"});
    console.log("Navbar: user::", user);
    debugger;
    navigate("/");
    console.log("Navbar: user::", user);
    debugger;
  }

  return (
    <nav className="navbar bg-light shadow">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img alt="company logo" src={logo}></img>
        </NavLink>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 searchBar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <NavLink className="nav-link" to="/">
            <i className="bi bi-house-fill"></i>
          </NavLink>
          {user.id ? (
            <>
              <NavLink className="nav-link">
                <i className="bi bi-search"></i>
              </NavLink>

              <NavLink className="nav-link" to="#">
                <i className="bi bi-heart"></i>
              </NavLink>

              <NavLink className="nav-link" to="/profile">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <i className="bi bi-circle"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                    <Dropdown.Item onClick={onLogout}>Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavLink>
            </>
          ) : (
            <></>
          )}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
