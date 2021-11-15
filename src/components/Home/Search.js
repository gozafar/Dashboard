// import React from 'react';
// import { useState, useEffect } from 'react';

// function Search(props) {
//     const [searchdata, setSearchData] = useState(null)

//     const handleSearch=(event)=>{
//         setSearchData(event.target.value)
//     }
//     return (
//         <div>
//              <div className="flex justify-center">
//                 <div>
//                     <input className="p-2 outline-none border-2 w-96 rounded-lg border-primary pl-1" type="text"
//                         placeholder="Search"
//                         // onChange={(event) => setSearchData(event.target.value)}
//                         onChange={handleSearch}
//                         value={searchdata}
//                     />
//                     </div>

//                     </div>
//         </div>
//     );
// }

// export default Search;

import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

function Search(props) {
  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  //   const handle = () => {
  //     fetch("http://localhost:3000/zafar", {
  //       method: "Post",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         surname,
  //         email,
  //         mobile,
  //         password,
  //         username,
  //         dob,
  //         gender,
  //       }),
  //     }).then((result) => {
  //       result.json().then((res) => {
  //         console.warn(res);
  //         // alert("Your Account is Successfully Added")
  //         history.push("/success");
  //       });
  //     });
  //   };
  //   const data = {};
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:3004/zafar", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        surname: data.surname,
        username: data.username,
        email: data.email,
        mobile: data.mobile,
        password: data.password,
        dob: data.dob,
        gender: data.gender,
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
    <div className="bg-gray-400 pt-20 h-screen">
      <div className=" space-y-3 ">
        <form className=" space-y-3 " onSubmit={handleSubmit(onSubmit)}>
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
                className={classNames(
                  " p-2 outline-none border-2 w-40 rounded-lg border-primary pl-1",
                  { "is-invalid": errors.firstName }
                )}
                type="text"
                placeholder="First Name"
                {...register("firstName", {
                  required: "first name is required.",
                  minLength: {
                    value: 4,
                    message: " please enter minimum 4 chractor. ",
                  },
                })}
              />

              <input
                className="p-2 w-40 outline-none border-2 rounded-lg border-primary pl-1"
                type="text"
                placeholder="Surname"
                {...register("surname", {
                  required: "surname is required.",
                  minLength: {
                    value: 4,
                    message: " please enter minimum 4 chractor. ",
                  },
                })}
              />
            </div>
          </div>

          {/* vlidation part  start*/}
          <div className="text-center text-yellow-400  ">
            {errors.firstName && (
              <div className="invalid-feedback">{errors.firstName.message}</div>
            )}
            {/* {errors.firstName?.type === "minLength" && (
            <div className="invalid-feedback">
              please enter minimum 4 chractor.
            </div>
          )} */}

            {errors.surname && (
              <div className="invalid-feedback">{errors.surname.message}</div>
            )}
            {/* {errors.surname?.type === "minLength" &&
              "please enter minimum 4 chractor"} */}
            {/* </div> */}
            {/* vlidation part  end*/}
          </div>
          <div className="flex justify-center ">
            <div>
              <input
                className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
                type="text"
                placeholder="Enter Your Username"
                {...register("username", {
                  required: "username is required.",
                  minLength: {
                    value: 4,
                    message: "please enter minimum 4 chractor",
                  },
                })}
              />
            </div>
          </div>

          {/* vlidation part  start*/}
          <div className="text-center">
            {errors.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
            {/* {errors.username?.type === "minLength" &&
              "please enter minimum 4 chractor"} */}
          </div>
          {/* vlidation part  end*/}

          <div className="flex justify-center ">
            <div>
              <input
                className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
                type="text"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "email is required.",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "please enter a valid email",
                  },
                })}
              />
            </div>
          </div>

          {/* vlidation part  start*/}
          <div className="text-center">
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          {/* vlidation part  end*/}

          <div className="flex justify-center ">
            <div>
              <input
                className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
                type="text"
                placeholder="Enter Your Mobile"
                {...register("mobile", {
                  required: "mobile number is required.",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "please enter a valid 10 digits  mobile number",
                  },
                })}
              />
            </div>
          </div>

          {/* vlidation part  start*/}
          <div className="text-center">
            {errors.mobile && (
              <div className="invalid-feedback">{errors.mobile.message}</div>
            )}
            {/* {errors.mobile?.type === "minLength" && "10 digits is required."} */}
          </div>
          {/* vlidation part  end*/}

          <div className="flex justify-center ">
            <div>
              <input
                className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
                type="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "password is required.",
                  pattern: {
                    value:
                      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                    message: "please enter a valid password",
                  },
                })}
              />
            </div>
          </div>

          {/* vlidation part  start*/}
          <div className="text-center">
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          {/* vlidation part  end*/}

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
                {...register("dob", { required: true })}
              />

              <select
                className=" w-36 border-2 p-2 border-primary outline-none rounded-lg "
                {...register("gender", { required: true })}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          {/* vlidation part  start*/}
          <div className="text-center">
            {errors.gender && "gender is required."}
            {errors.dob && "Dob is required."}
          </div>
          {/* vlidation part  start*/}

          <div className="flex justify-center ">
            <div>
              <button
                className="border-2 w-96 p-2 outline-none border-primary rounded-lg font-bold text-white bg-red-500"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
}

export default Search;
