import React, { useState } from "react";
import "../style.css";
import validation from "./validation";

function Accounts(props) {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    account: "",
    ifsc: "",
  });

  const[errors, setErrors] = useState({});

  const handlechange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(value));
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div style={{
          textAlign:"center"
        }}> <button className="title">Add Accounts</button></div>
       
      
      <form className="form-wrapper">
        <div className="name">
          <level className="label">Full Name</level>
          <input
            className="input"
            type="text"
            name="fullname"
            value={value.fullname}
            onChange={handlechange}
          />
          {errors.fullname && <p className="error">{errors.fullname}</p>}
          <level className="label">Email</level>
          <input 
            className="input "
            type="text"
            name="email"
            value={value.email}
            onChange={handlechange}
          />{errors.email && <p className="error">{errors.email}</p>}
          <level className="label">Account Number</level>
          <input
            className="input"
            type="text"
            name="account"
            value={value.account}
            onChange={handlechange}
          /> 
          {errors.account && <p className="error">{errors.account}</p>}
          <level className="label">IFSC Code </level>
          <input
            className="input"
            type="text"
            name="ifsc"
            value={value.ifsc}
            onChange={handlechange}
          />{errors.ifsc && <p className="error">{errors.ifsc}</p>}
          <button className="submit" onClick={handleFormSubmit}>
            Add
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Accounts;
