import React, { useState } from "react";
import "../css/Login.css";
import img_Social from "../img/social-desktop.PNG";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../config";
import sAlert from "sweetalert2";

function SignUp() {
  const [isLoading, setLoading] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mob, setMobile] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");

  const onSignUp = (ev) => {
    ev.preventDefault();
    setLoading(true);
    const reqBody = { fname, lname, mob, pwd, email };
    axios
      .post(`${API_BASE_URL}/signup`, reqBody)
      .then((res) => {
        console.log("signup: response recieved::", res);
        if (res) {
          sAlert.fire({
            icon: "success",
            title: "Success",
            text: res.data.Suceess,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log("Error: OCcured", err);
        sAlert.fire({
          icon: "error",
          title: "Error",
          text: err,
          timer: 2000,
        });
      });
    setLoading(false);
  };

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
            <h2>Sign Up</h2>
            <form className="justify-content-center align-items-center">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-2 "
                  id="fname"
                  placeholder="Enter First Name"
                  value={fname}
                  onChange={(ev) => setFname(ev.target.value)}
                ></input>
                <input
                  type="text"
                  className="form-control mt-2 "
                  id="lname"
                  placeholder="Enter Last Name"
                  value={lname}
                  onChange={(ev) => setLname(ev.target.value)}
                ></input>
                <input
                  type="number"
                  className="form-control mt-2 "
                  id="mob"
                  placeholder="Enter mobile number"
                  value={mob}
                  onChange={(ev) => setMobile(ev.target.value)}
                ></input>
                <input
                  type="text"
                  className="form-control mt-2 "
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                ></input>

                <input
                  type="password"
                  className="form-control mt-2 "
                  id="pwd"
                  placeholder="Enter password"
                  value={pwd}
                  onChange={(ev) => setPwd(ev.target.value)}
                ></input>

                <div className="d-grid mt-3 ">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={onSignUp}
                  >
                    {isLoading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </form>
            <form>
              <hr /> OR <hr />
              <span className="text-muted">
                Already have an account? <Link to="/login">Log In</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
