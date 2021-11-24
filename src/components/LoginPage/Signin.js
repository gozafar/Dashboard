import React from "react";
import { Link } from "react-router-dom";
import "../../style.css";

function Signin(props) {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div
          style={{
            width: "60px",
            paddingBottom: "30px",
          }}
        >
          <img src="catax-logo.png" alt="logo" />
        </div>
        <input className="input" placeholder="Enter Your Email" type="text" />
        <input
          className="input"
          placeholder="Enter Your Password"
          type="text"
        />

        <Link to="/Heading">
          <button className="submit">Sign in</button>
        </Link>
        <br />
        {/* <React.StrictMode>
          <div className="g-signin">
            <Login />
          </div>
        </React.StrictMode> */}
        <div className="sign-in-page ">
          <span>Don't Have an account</span>
          <Link to="loginPage1">
            <button className="sign-in-btn">Sign up New Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Signin;
