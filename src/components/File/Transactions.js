import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import React, { useState } from "react";
import MonthGraph from "./Garph/MonthGraph";
import WeekGraph from "./Garph/WeekGraph";

function Transactions(props) {
  const [show, setShow] = useState(true);

  return (
    <div className="bg-red-50 text-black">
      <div className="main-menu flex p-6 flex-wrap justify-evenly">
        <div className="w-60 h-36 border">Total Accounts</div>
        <div className="w-60 h-36 border">Total Txn</div>
        <div className="w-60 h-36 border">Value Of Txn</div>
        <div className="w-60 h-36 border">To Be used</div>
      </div>
      <div className="main-menu flex p-6 flex-wrap justify-evenly">
        <div className="w-60 h-36 border">Valid</div>
        <div className="w-60 h-36 border">Invalid</div>
        <div className="w-60 h-36 border">Analysis Pending</div>
        <div className="w-60 h-36 border">Recon Pending</div>
      </div>
      <div className="space-x-4 ml-32 border mr-32 font-bold`">
        <span>Transection</span>
        <span>Exchanges</span>
      </div>
      <div className="p-4">
        <div className=" text-black chart max-w-screen min-w-min h-96 relative border font-bold ">
          <div className="flex ">
            {/* <h1>Graph</h1> */}
            <button
              className="
              absolute top-1 right-56
              font-bold "
              // onClick={() => setShow(false)}
            >
              MonthGraph
            </button>
            <button
              className=" font-bold absolute top-1 left-5"
              // onClick={() => setShow(true)}
            >
              WeekGraph
            </button>
            <div
              className="
              absolute top-0 right-5"
            >
              <DateRangePickerComponent
                placeholder="Enter a Date Here "
                // change={handle}
              />
            </div>
          </div>
          <div className="mt-10  w-4/5">
            {show ? <WeekGraph /> : <MonthGraph />}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className=" text-black chart max-w-screen min-w-min h-96 relative border font-bold ">
          <div className="flex ">
            {/* <h1>Graph</h1> */}
            <button
              className="
              absolute top-1 right-56
              font-bold "
              // onClick={() => setShow(false)}
            >
              MonthGraph
            </button>
            <button
              className=" font-bold absolute top-1 left-5"
              // onClick={() => setShow(true)}
            >
              WeekGraph
            </button>
            <div
              className="
              absolute top-0 right-5"
            >
              <DateRangePickerComponent
                placeholder="Enter a Date Here "
                // change={handle}
              />
            </div>
          </div>
          <div className="mt-10  w-4/5">
            {show ? <WeekGraph /> : <MonthGraph />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
