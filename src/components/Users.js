import React from 'react';
import { useState, useEffect } from 'react';


function Users(props) {
    const [data,setData]=useState([])

    useEffect(() => {
        fetch("http://localhost:3004/zafar").then((res) => {
            res.json().then((results) => {
                console.log(results)
                setData(results)

            })
        })


    }, [])

    return (
        <div className="ml-5 mt-5">
           <div>
               <div></div>
           </div>
            <div>
                
{
    data?
    <div >
                            <table className="border-2">
                                <thead >
                                    <tr className="border-2">
                                        <th className="border-2 color-primary ">Id</th>
                                        <th className="border-2 " >Name </th>
                                        <th className="border-2 " >Username </th>
                                        <th className="border-2">Email </th>
                                        <th className="border-2">Mobile No </th>
                                       

                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        data.map((items, i) =>




                                            <tr className="space-x-5 pl-5">
                                                <td className="border-2 text-right">{items.id}</td>
                                                <td className="border-2 text-right">{items.name}</td>
                                                <td className="border-2 text-right">{items.username}</td>
                                                <td className="border-2 text-right">{items.email}</td>
                                                <td className="border-2 text-right w-20">{items.mobile}</td>
                                                
                                            </tr>


                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
    :
    <p>please wait.......</p>
}
                   
            </div>
        </div>
    );
}

export default Users;