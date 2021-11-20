import React from "react";
import "../style.css";
import Heading from "./main/Heading";

function Tasks(props) {
  return (
    <div
      style={{
        background: "#f8f0f0",
      }}
    >
      <Heading />
      <button className="task-btn">Add Tasks</button>
      <span
        style={{
          paddingLeft: "900px",
          fontSize: "18px",
        }}
      >
        My Tasks
      </span>

      <div className="task-main">
        <div className="task-rg">
          <div className="upper-l">
            {" "}
            <span>All Tasks</span>
            <tr className="p-0.5">
              <td className="tab-data">Title</td>
              <td className="tab-data1">Time</td>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
            </tr>

          </div>
          <div className="lower-l">
            {" "}
            Today Tasks
            <tr>
              <td className="tab-data">Title</td>
              <td className="tab-data1">Time</td>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
            </tr>
          </div>
        </div>
        <div className="middle-l">
          Doing Tasks
          <tr>
            <td>Title</td>
          </tr>
        </div>
        <div className="task-lf">
          <div>My Tasks</div>
          <div>
            <tr className="tab-row">
              <td className="tab-data">Title</td>
              <td className="tab-data1  ">Priority</td>
              <td className="tab-data1">From</td>
              <td className="tab-data1">Time</td>
            </tr>

            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
            </tr>
            <tr>
              <th className="tab-d"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
              <th className="tab-d1"></th>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tasks;
