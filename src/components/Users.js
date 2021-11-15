import React from "react";
import { useState, useEffect } from "react";
import Search from "./Home/Search";
import { useHistory } from "react-router-dom";

function Users(props) {
  let history = useHistory();

  const [data, setData] = useState([]);
  // const [searchdata, setSearchData] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3004/zafar").then((res) => {
      res.json().then((results) => {
        console.log(results);
        setData(results);
        //     const user = results.map( u => {
        //         if(u.email === email)
        //         return u
        //     })
        //      if(paswword === user.password){
        //          setData(user)
        //      }
        //     setData(results)
        //     return 'user not found'
      });
    });
  }, []);

  const handleClick = () => {
    history.push("/");
  };
  // const searchText=(searchValue)=>{
  //     setSearchData(event.target.value)

  // }

  return (
    <div className="ml-5 mt-5 space-y-8">
      {/* <div className="flex justify-center">
               <Search filterValue={searchdata} searchdata={searchText}/>
            </div> */}

      <div className="flex justify-end">
        <button
          className="bg-primary p-4 rounded 
                mr-5

                 font-bold text-white "
          onClick={handleClick}
        >
          Logout
        </button>
      </div>

      <div>
        {data ? (
          <div className="flex justify-center">
            <table className="border-2" id="myTable">
              <thead>
                <tr className="border-2">
                  <th className="border-2 color-primary ">Id</th>
                  {/* <th className="border-2 ">Name </th> */}
                  <th className="border-2 ">Username </th>
                  <th className="border-2">Email </th>
                  <th className="border-2">Mobile No </th>
                </tr>
              </thead>
              <tbody>
                {data.map((items, i) => (
                  <tr className="space-x-5 pl-5">
                    <td className="border-2 text-right">{items.id}</td>
                    {/* <td className="border-2 text-right">{items.firstNme}</td> */}
                    <td className="border-2 text-right">{items.username}</td>
                    <td className="border-2 text-right">{items.email}</td>
                    <td className="border-2 text-right w-20">{items.mobile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>please wait.......</p>
        )}
      </div>
    </div>
  );
}

export default Users;
