import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style.css";
import Login from "./Login";

function LoginPage1(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

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

        <input
          placeholder="Enter Your Full Name"
          className="input"
          type="text"
          name="fullname"
          // value={name}
          onChange={(event) => setName(event.target.value)}
        />
        {/* <p>value={name.name}</p> */}

        <input
          className="input"
          placeholder="Enter Your Email"
          type="text"
          name="Enter Your Email"
          // value={email}
          onChange={(event) => setEmail(event.target.value)}
          
        />
        {/* <link href="/loginPage2" className="submit">Next</link> */}
        <Link to="/loginPage2">
          <button
            className="submit"
            // onClick={handleFormSubmit}
          >
            Next
          </button>
        </Link>
        <span
          style={{
            textAlign: "center",
            padding: "20px",
            margin: "10px",
          }}
        >
          Login with Google
        </span>
        <br />

        <React.StrictMode>
          <div className="g-signin">
            <Login />
          </div>
        </React.StrictMode>
      </div>
      <Link></Link>
    </div>
  );
}
export default LoginPage1;
