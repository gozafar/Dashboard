import React from "react";

// import catax from '../src/catax.png'

import OutlinedCard from "./card";



function Transaction(props) {
    // const [ search, setSearch] = useState("")

  return (
    <div >
      <div  className=" items-center flex flex-col max-width-1200 ">
        <h1 className="py-5 text- leading-6 space-y-4  text-sm font-bold text-red-900 text-4xl ">Total Transaction <span>344.14$</span></h1>
        <h2 className="py-5 text- leading-6 space-y-4  text-sm font-bold text-blue-900 text-3xl">Today total transaction <span>4.3$</span></h2> 
      </div>
      <div style={{
          
          width:"300px",
         
      }}>       
          {/* <input type="text" placeholder="Search Transections" className=" text-3xl border " /> */}
        <h3 className="text-3xl py-5">  Total Value </h3>
        <h3 className="text-3xl py-5"> Processing Data</h3>
      </div>
      <div className="border-solid space-y-4 p-1.5 text-3xl ">  
        
      </div>
    </div>
  );
}

export default Transaction;
