import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignUp(props) {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();

  const formref = useRef();

  const [name, setName] = useState(null);
  const [surname, setSurName] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState(null);
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);

  const handle = () => {
    fetch("http://localhost:3000/zafar", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        email,
        mobile,
        password,
        username,
        dob,
        gender,
      }),
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
        // alert("Your Account is Successfully Added")
        history.push("/success");
      });
    });
  };

  return (
    <div className="bg-gray-800 pt-20 h-screen">
      <div className=" space-y-3 r">
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <div className="flex justify-center ml-5">
          <div className=" h-16 w-96 text-white">
            <h1>
              <span className="text-3xl font-bold">Sign Up </span>
              <span>
                <p>it's quick and easy</p>
              </span>
            </h1>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="space-x-14 ">
            <input
              className=" p-2 outline-none border-2 w-40 rounded-lg border-primary pl-1"
              type="text"
              placeholder="First Name"
              onChange={(event) => setName(event.target.value)}
              //   ref={formref}
            />
            <input
              className="p-2 w-40 outline-none border-2 rounded-lg border-primary pl-1"
              type="text"
              placeholder="Surname"
              onChange={(event) => setSurName(event.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <div>
            <input
              className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
              type="text"
              placeholder="Enter Your Username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <div>
            <input
              className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
              type="text"
              placeholder="Enter Your Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <div>
            <input
              className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
              type="text"
              placeholder="Enter Your Mobile"
              onChange={(event) => setMobile(event.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <div>
            <input
              className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
              type="text"
              placeholder="Enter Your Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>

        {/* <div className="flex justify-center ">
                    <div>
                        <input className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1" type="text"
                            placeholder="Enter Your Password" onChange={(event) => setPasswords(event.target.value)} />
                    </div>
                </div> */}

        <div className="flex justify-center ">
          {/* Date of Birth */}
          <div className="w-96 space-x-14">
            <input
              type="date"
              id="birthday"
              name="birthday"
              className="w-42 p-2 outline-none pl-1 border-2 rounded-lg border-primary"
              onChange={(event) => setDob(event.target.value)}
            />

            <select
              id="country"
              name="country"
              className=" w-36 border-2 p-2 border-primary outline-none rounded-lg "
              onChange={(event) => setGender(event.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center ">
          <div>
            <button
              className="border-2 w-96 p-2 outline-none border-primary rounded-lg font-bold text-white bg-red-500"
              onClick={handle}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
