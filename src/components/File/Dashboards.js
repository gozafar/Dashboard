import React, { useState } from "react";
import "../../App.css";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import MonthGraph from "./Garph/MonthGraph";
import WeekGraph from "./Garph/WeekGraph";

function Dashboards(props) {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState(null);

  const handle = (data) => {
    console.log("adding", data);
  };

  return (
    <div className="bg-red-50 text-black">
      <div className="main-menu flex p-6 flex-wrap justify-evenly  ">
        <div className="w-56 h-36 border">Registered Today</div>
        <div className="w-56 h-36  border">Registered Yesterday</div>
        <div className="w-56 h-36  border">Total Registred</div>
        <div className="w-56 h-36  border ">Incomplete Registration</div>
      </div>
      <div>
        <div className=" text-black chart max-w-screen min-w-min h-96 relative border font-bold">
          <div className="flex ">
            {/* <h1>Graph</h1> */}
            <button
              className="
              absolute top-1 right-56
              font-bold "
              onClick={() => setShow(false)}
            >
              MonthGraph
            </button>
            <button
              className=" font-bold absolute top-1 left-5"
              onClick={() => setShow(true)}
            >
              WeekGraph
            </button>
            <div
              className="
              absolute top-0 right-5"
            >
              <DateRangePickerComponent
                placeholder="Enter a Date Here "
                change={handle}
              />
            </div>
          </div>
          <div className="mt-10  w-4/5">
            {show ? <WeekGraph /> : <MonthGraph />}
          </div>
        </div>
      </div>
      <div className="flex  space-x-10 main-table text-black">
        <div className="main-col flex flex-col p-6 space-y-6 flex-wrap min-w-max font-bold">
          <div className="w-56 h-36 border  rounded">Registered Today</div>
          <div className="w-56 h-36 border  rounded  ">Registered Today</div>
          <div className="w-56 h-36 border  rounded  ">Registered Today</div>
          <div className="w-56 h-36 border  rounded  ">Registered Today</div>
        </div>
        <div className="side  h-screen w-full border m-7 p-5">
          <div className="flex Search ">
            <div className=" text-center font-bold">
              <h1 className="p1 ">Latest Registration</h1>
            </div>
            {/* <div className="p-5  h-20">
            <h1 className="p1">Latest Registration</h1>
          </div> */}
            <div className=" space-x-2  Search-bar">
              <input
                type="text"
                className="outline-none rounded p-1 text-black "
                placeholder="Search Here"
                onChange={(event) => setSearch(event.target.value)}
              />
              <input
                type="submit"
                className="text-black outline-none rounded p-1 bg-primary"
              />
            </div>
          </div>
          <div>
            <div className="flex pt-20 ">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                  <td>Active</td>
                </tr>

                <tr>
                  <td>Centro comercial Moctezuma</td>
                  <td>Francisco Chang</td>
                  <td>Mexico</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Ernst Handel</td>
                  <td>Roland Mendel</td>
                  <td>Austria</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Island Trading</td>
                  <td>Helen Bennett</td>
                  <td>UK</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Laughing Bacchus Winecellars</td>
                  <td>Yoshi Tannamuri</td>
                  <td>Canada</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Magazzini Alimentari Riuniti</td>
                  <td>Giovanni Rovelli</td>
                  <td>Italy</td>
                  <td>Active</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
