import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  const [email, setEmail] = useState(null);

  const [password, setPassword] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/zafar").then((res) => {
      res.json().then((results) => {
        setData(results);
        console.log(data);
      });
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log({ data });
    // const xyz = data.find((u) => u.email === email && u.password === password);
    // console.log({ xyz });
    // if (xyz) {
    //   history.push("/users");
    // } else {
    //   alert("usser not found");
    // }

    const zaif = data.find((items) => {
      return (
        (items.email === email || items.mobile === email) &&
        items.password === password
      );
    });
    if (zaif) {
      history.push("/users");
    } else {
      alert("usser not found");
    }
  };

  const click = () => {
    history.push("/search");
  };
  return (
    <div className=" h-screen float-right  ">
      <div className=" w-96 mr-10 ">
        <div className=" bg-white  flex flex-col items-end  space-y-5 border-white  border-2 p-10 rounded-lg outline-none pb-5 ">
          <input
            className=" p-4 outline-none border-2 w-72 rounded-lg border-primary pl-1"
            type="text"
            autoComplete="off"
            placeholder="Enter Your Email or Mobile"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className=" p-4 outline-none border-2 w-72 rounded-lg border-primary pl-1"
            type="password"
            autoComplete="off"
            placeholder="Enter Your Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="w-72 p-4 border-2 outline-none border-primary rounded-lg"
            onClick={handleClick}
          >
            Log In
          </button>
          <div className="w-full border-b-2 border-primary"></div>
          <button
            className="w-72 p-4 border-2 outline-none border-primary rounded-lg"
            onClick={click}
          >
            {" "}
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
