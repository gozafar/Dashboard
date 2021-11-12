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

function Search(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" pt-20 h-screen">
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
                className=" p-2 outline-none border-2 w-40 rounded-lg border-primary pl-1"
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />

              <input
                className="p-2 w-40 outline-none border-2 rounded-lg border-primary pl-1"
                type="text"
                placeholder="Surname"
                {...register("surname", { required: true })}
              />
            </div>
          </div>
          <div className="text-center">
            {errors.surname && "surname is required."}
            {errors.firstName && "first name is required."}
          </div>
          <div className="flex justify-center ">
            <div>
              <input
                className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
                type="text"
                placeholder="Enter Your Username"
                {...register("username", { required: true })}
              />
            </div>
          </div>
          <div className="text-center">
            {errors.username && "username is required."}
          </div>
          <div className="flex justify-center ">
            <div>
              <input
                className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
                type="text"
                placeholder="Enter Your Email"
              />
            </div>
          </div>

          <div className="flex justify-center ">
            <div>
              <input
                className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
                type="text"
                placeholder="Enter Your Mobile"
              />
            </div>
          </div>

          <div className="flex justify-center ">
            <div>
              <input
                className="p-2 w-96 outline-none border-2 rounded-lg border-primary pl-1"
                type="text"
                placeholder="Enter Your Password"
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
              />

              <select
                id="country"
                name="country"
                className=" w-36 border-2 p-2 border-primary outline-none rounded-lg "
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
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
