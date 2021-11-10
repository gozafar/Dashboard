import React from 'react';
import { useHistory } from 'react-router-dom'


function Success(props) {
    let history = useHistory();


    const back = () => {
        history.push('/users')
    }

    return (
        <div className="grid place-items-center h-screen ">
            <div className="flex justify-center bg-primary pt-6  pl-8 font-bold w-96 h-36 rounded text-white">
                <h1>Your Account is Successfully Added</h1><br />
                {/* <button className="h-6 w-12 pt-7 border-2 font-bold  ">OK</button>
            
             */}
                <div className="flex flex-col pt-16 w-12">
                    <button className="border-2  rounded font-bold text-white" onClick={back}>OK</button>
                </div>
                {/* <div> */}
                {/* <button>OK</button> */}

                {/* </div> */}
            </div>
        </div>
    );
}

export default Success;