import React from "react";
import "../css/Login.css";
import img_Social from "../img/social-desktop.PNG";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config";
import sAlert from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer);

  const onLogin = (ev) => {
    ev.preventDefault();

    const mobElem = document.getElementById("mob");
    const pwdElem = document.getElementById("pwd");
    console.log(`Login: mob Elem value ${mobElem.value}`);
    console.log("Login: pwdElem value", pwdElem.value);

    const reqBody = { mob: mobElem.value, pwd: pwdElem.value };
    axios.post(`${API_BASE_URL}/login`, reqBody).then((res) => {
      if (res.status == 200) {
        sAlert.fire({
          icon: "success",
          title: res.status,
          text: res.data.Success,
          timer: 1500,
        });

        localStorage.setItem("token", res.data.token);
        navigate("/profile");
        console.log("Login: user::", user);
        debugger;
        dispatch({ type: "Login_Success", payload: res.data.id });
        console.log("Login: user::", user);
        debugger;
      } else {
        sAlert.fire({
          icon: "warning",
          title: res.status,
          text: res.data.Error,
          timer: 2000,
        });
      }
    });
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
            <h2>Log In</h2>
            <form className="justify-content-center align-items-center">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mt-2 "
                  id="mob"
                  placeholder="Enter mobile"
                ></input>

                <input
                  type="text"
                  className="form-control mt-2 "
                  id="pwd"
                  placeholder="Enter password"
                ></input>
                <div className="d-grid mt-3 ">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={onLogin}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            <form>
              <hr /> OR <hr />
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
