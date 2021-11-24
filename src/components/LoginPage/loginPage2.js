import React from "react";
import { Link } from "react-router-dom";

// import Login from "./Login";

function loginPage2() {
  return (
    <div className="container">
      <div className="app-wrapper">
       <div style={{
         width:"60px",
         paddingBottom:"30px"
       }}>
       <img src="catax-logo.png" alt="logo"  />
       </div>
      
        <input
          className="input"
          type="text"
          placeholder="Enter Your Password"
        />
        <input className="input" type="text" placeholder="Confirm Your Password" />
        <Link to="/Signin"><button className="submit">Sign up</button></Link>
        {/* <span  style={{
          textAlign:"center",
          padding:"20px",
          margin: "10px"
        }}>Login with Google</span><br />
        <React.StrictMode>
            <div className="g-signin">
              <Login />
            </div>
          </React.StrictMode> */}
          
      </div>
    </div>
  );
}
export default loginPage2;
