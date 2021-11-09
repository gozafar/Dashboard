import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'




function Login() {
    let history = useHistory();


    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleClick = () => {
        history.push('/users')
    }
    const click = () => {
        history.push('/signup')
    }
    return (
        <div className=" h-screen float-right  ">
            <div className=" w-96 mr-10 ">
                <div className=" bg-white  flex flex-col items-end  space-y-5 border-white  border-2 p-10 rounded-lg outline-none pb-5 ">
                    <input className=" p-4 outline-none border-2 w-72 rounded-lg border-primary pl-1" type="text"
                        placeholder="Enter Your Email" onChange={(event) => setEmail(event.target.value)} />
                    <input className=" p-4 outline-none border-2 w-72 rounded-lg border-primary pl-1" type="text"
                        placeholder="Enter Your Password" onChange={(event) => setPassword(event.target.value)} />
                    <button className="w-72 p-4 border-2 outline-none border-primary rounded-lg" onClick={handleClick}>Log In</button>
                    <div className="w-full border-b-2 border-primary"></div>
                    <button className="w-72 p-4 border-2 outline-none border-primary rounded-lg" onClick={click}> Create New Account</button>

                </div>

            </div >


        </div >
    );
}

export default Login;