import React from "react";
import { Link } from "react-router-dom";
import "./Heading.css";

function Heading(props) {
  return (
    <div className="bg-primary min-h-full max-h-16 flex justify-between  items-center p-4 text-white pr-20 ">
      <div className="flex flex-row p-5 ">
        <div>
          <h1 className="font-bold text-4xl pb-2">
            <Link to="/dashboards">catax</Link>
          </h1>
        </div>
      </div>

      <div className="menu">
        <ul className="flex space-x-14 min-h-full max-h-5 pl-16 ">
          <li>
            <Link to="/dashboards">Dashboard</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/account">Accounts</Link>
          </li>
          <li>
            <Link to="/transactions">Transaction</Link>
          </li>
          <li>
            <Link to="/dashboards">More</Link>
            <ul className="space-y-2 w-28 pt-6 pl-4 rounded-lg pb-3 ">
              <li>
                <Link to="/billing">Billing</Link>
              </li>
              <li>
                <Link to="/organizations">Organization</Link>
              </li>
              <li>
                <Link to="/Tasks">Task</Link>
              </li>
              <li>
                <Link to="/setting">Setting</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
              <li>
                <Link to="/emails">Emails</Link>
              </li>
              <li>
                <Link to="/tickests">Tickets</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Heading;
