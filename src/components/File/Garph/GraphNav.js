import React from "react";
import { Link } from "react-router-dom";

function GraphNav(props) {
  return (
    <div className="bg-red-800 h-6 flex justify-between pl-5 pr-5 ">
      <div>
        <ul>
          <li>
            <Link to="/weekgraph">WeekGraph</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-2 ">
          <li>
            <Link to="/monthgraph">MonthGraph</Link>
          </li>
          {/* <li>
            <Link to="/monthgraph">MonthGraph</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default GraphNav;
