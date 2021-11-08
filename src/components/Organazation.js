import React from 'react';
import EmployeForm from './EmployeForm'
import { useState, useEffect } from 'react/cjs/react.development';
import { useHistory } from 'react-router-dom'


function Organazation(props) {
    const [data, setData] = useState([]);
    let history = useHistory();
    // const [search, setSearch] = useState(null)



    useEffect(() => {
        fetch("http://localhost:3000/zafar").then((res) => {
            res.json().then((results) => {
                console.log(results)
                setData(results)

            })
        })


    }, [])
    const handleClick = () => {
        history.push('/employeform')
    }

    console.log(data, "smting");
    return (
        <div >
            <div>
                <button className="bg-primary p-5 rounded float-right mr-5 font-bold text-white "
                    onClick={handleClick}
                >Add Employe</button>

            </div>
            {/* <div className=" flex justify-center border-primary mt-10 ">
                <input type="text" className=" rounded border-2 outline-none  "
                    onChange={(event) => setSearch(event.target.value)} />
                    
                <button className="pl-2  font-bold rounded ml-2">Search</button>
            </div> */}
            <div className=" mt-14 flex justify-center">
                {
                    data ?
                        <div>
                            <table className="border-2">
                                <thead >
                                    <tr className="border-2">
                                        <th className="border-2 color-primary">Id</th>
                                        <th className="border-2">Name </th>
                                        <th className="border-2">Email </th>
                                        <th className="border-2">Mobile No </th>
                                        <th className="border-2">Position</th>
                                        <th className="border-2">Work Type </th>

                                    </tr>

                                </thead>
                                <tbody>
                                    {
                                        data.map((items, i) =>




                                            <tr className="space-x-5 pl-5">
                                                <td className="border-2 text-right">{items.id}</td>
                                                <td className="border-2 text-right">{items.name}</td>
                                                <td className="border-2 text-right">{items.email}</td>
                                                <td className="border-2 text-right">{items.mobile}</td>
                                                <td className="border-2 text-right">{items.position}</td>
                                                <td className="border-2 text-right">{items.workType}</td>
                                            </tr>


                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                        :
                        <p>Please Wait........</p>
                }
            </div>
        </div>
    );
}

export default Organazation;