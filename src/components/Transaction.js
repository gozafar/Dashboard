import React from "react";
import Chart from "./Chart";

function Transaction(props) {
  // const [ search, setSearch] = useState("")

  return (
    <div>
      <div className="  flex flex-row justify-center max-width-1200  ">
        <div className="border-4 box-border h-32 w-250 p-4">
          <h1 className="py-5 text- leading-6 space-y-4   font-bold text-red-900 text-4xl ">
            Total Transaction <span className="text-green-900">344.14$</span>
          </h1>
        </div>
        <div className="border-4 box-border h-32 w-250 p-4">
          <h2 className="py-5 text- leading-6 space-y-4   font-bold text-blue-900 text-3xl">
            Today total transaction <span className="text-green-900">4.3$</span>
          </h2>
        </div>
      </div>
      <br />
      <div className="  flex  justify-center   ">
        <h3 className="text-3xl py-5"> Total Value </h3>
      </div>
      <div className="  flex  justify-center   ">
        <h3 className="text-3xl py-5"> Processing Data</h3>
      </div>
      <div className="flex justify-center ">
        <h3 className="text-3xl py-5">Pending Reconciliation</h3>
      </div>
      <div className="flex justify-center ">
        <h3 className="text-3xl py-5">Pending Analysis</h3>
      </div>
      <div className="  flex flex-row justify-center  ">
      <Chart />
      </div>
      <div className="  flex flex-row justify-center " >
      <h3 className="text-3xl py-5">Latest Transection</h3>
      <div>
        <table>
          
        </table>
      </div>
        
      </div>

      
    </div>
  );
}

export default Transaction;
