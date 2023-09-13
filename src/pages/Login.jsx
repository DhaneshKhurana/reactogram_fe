import React from "react";
import "../css/Login.css";
import img_Social from "../img/social-desktop.PNG";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="row d-flex flex-grow-1 align-items-center justify-content-center ">
      {/* left side social image*/}
      <div className="col-12 col-md-7">
        <img className="socialImg" src={img_Social} alt="social" />
      </div>
      {/*Right side Login Card*/}
      <div className="col-12 col-md-4 ">
        <div className=" card social-form shadow">
          <div className="card-body justify-content-center align-items-center">
            <h2>Log In</h2>
            <form className="justify-content-center align-items-center">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-2 "
                  id="email"
                  placeholder="Enter username, email or phone"
                ></input>

                <input
                  type="text"
                  className="form-control mt-2 "
                  id="password"
                  placeholder="Enter password"
                ></input>
                <div className="d-grid mt-3 ">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <form>
              <hr/> OR <hr/>
              <span className="text-muted">
                Don't have an account? <Link to="/signup">Sign Up</Link> 
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
