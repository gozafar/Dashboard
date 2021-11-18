import React from "react";
import "../../App.css";

function Dashboards(props) {
  return (
    <div className="">
      <div className="main-menu flex p-6 flex-wrap justify-evenly ">
        <div className="w-56 h-36 bg-primary border-4 ">Registered Today</div>
        <div className="w-56 h-36 bg-primary border-4">
          Registered Yesterday
        </div>
        <div className="w-56 h-36 bg-primary border-4">Total Registred</div>
        <div className="w-56 h-36 bg-primary border-4 ">
          Incomplete Registration
        </div>
      </div>
      <div>
        <div className="chart max-w-screen h-80  bg-primary border-4 font-bold">
          <h1>Graph</h1>
        </div>
      </div>
      <div className="flex font-bold">
        <div className="main-col flex flex-col p-6 space-y-6 flex-wrap min-w-max">
          <div className="w-56 h-36 bg-primary border-4 ">Registered Today</div>
          <div className="w-56 h-36 bg-primary border-4 ">Registered Today</div>
          <div className="w-56 h-36 bg-primary border-4 ">Registered Today</div>
          <div className="w-56 h-36 bg-primary border-4 ">Registered Today</div>
        </div>
        <div className="side h-screen w-full flex bg-primary border-4 m-7">
          <div>Table</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
