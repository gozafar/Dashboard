import React from 'react';
import { Link } from "react-router-dom";
import catax from '../../../src/catax.png'
import Login from './Login'
// import { useHistory } from 'react-router-dom'




function Home(props) {
    // let history = useHistory();

    // const handleClick = () => {
    //     history.push('/users')
    // }
    
    return (
        <div className="bg-gray-800 ">
            {/* <h1>helllo India</h1> */}

            <div className="h-screen flex flex-row justify-center space-x-20 pt-36  ">
                <a > <Link to="/"> <img
                    className="h-20 w-42 mt-28 "
                    src={catax}
                    alt="Workflow"

                /></Link>
                    <h1 className="font-bold text-2xl text-white">Simple crypto taxes for everyone.</h1>
                </a>


                <Login />
            </div>

        </div>
    );
}

export default Home;