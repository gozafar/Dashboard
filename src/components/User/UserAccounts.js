import React from "react";
import { Link } from "react-router-dom";
import "../main/Heading.css";

function UserAccounts() {
  return (
    <div className="bg-red-50">
      <div className="flex justify-evenly">
        <div className=" min-h-full max-h-16 flex  items-center p-4  pr-50 font-bold">
          <div className="menu ">
            <ul className="flex space-x-14 min-h-full max-h-5 pl-16 ">
              <li>
                <a href="#users">Users</a>
              </li>
              <li>
                <a href="#accounts">Accounts</a>
              </li>
              <li>
                <a href="#transaction">Transaction</a>
              </li>
              <li>
                {/* <Link to="/#reports">Reports</Link> */}
                <a href="#reports">Reports</a>
              </li>
              <li>
                <a href="#">Subscriptions</a>
              </li>
              <li>
                <a href="#">Notes</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-12 flex-wrap" id="users">
        <div className="font-bold border w-1/4 p-5 space-y-5">
          <h1>Full Name </h1>
          <h1>Email </h1>
          <h1>Mobile Number </h1>
          <h1>City</h1>
          <h1>C|E </h1>
          <h1>Txn </h1>
        </div>
        <div className="font-bold  border w-1/4 p-5 space-y-5 ">
          {/* <h1>Full Name </h1>
          <h1>Email </h1>
          <h1>Mobile Number </h1>
          <h1>City</h1>
          <h1>C|E </h1>
          <h1>Txn </h1> */}
        </div>
        <div className="font-bold  border w-1/4 p-5 space-y-5">
          {/* <h1>Full Name </h1>
          <h1>Email </h1>
          <h1>Mobile Number </h1>
          <h1>City</h1>
          <h1>C|E </h1>
          <h1>Txn </h1> */}
        </div>
      </div>
      <div
        className="max-w-7xl m-8 flex justify-around font-bold "
        id="reports"
      >
        <div className="m-2 border w-1/6 p-2">
          <h1>Reports 1 </h1>
          <h1>Reports 1 </h1>
          <h1>Reports 1 </h1>
          <h1>Reports 1 </h1>
          <h1>Reports 1 </h1>
          <h1>Reports 1 </h1>
        </div>
        <div className="m-2 border w-1/6 p-2">
          <h1>Reports 2 </h1>
        </div>
        <div className="m-2 border w-1/6 p-2">
          <h1>Reports 3 </h1>
        </div>
        <div className="m-2 border w-1/6 p-2">
          <h1>Reports 4 </h1>
        </div>
        <div className="m-2 border w-1/6 p-2">
          <h1>Reports 5 </h1>
        </div>
      </div>
      <div
        className=" max-w-7xl m-14 flex justify-evenly font-bold "
        id="accounts"
      >
        <div className="m-2 border w-1/3 p-2">
          <h1>Exchanges</h1>
          <h1>Exchanges</h1>
          <h1>Exchanges</h1>
          <h1>Exchanges</h1>
          <h1>Exchanges</h1>
          <h1>Exchanges</h1>
        </div>
        <div className="m-2 border w-1/3 p-2 h-96">
          <h1>crypto 1 </h1>
        </div>
        <div className="m-2 border w-3/5 p-2 h-96">
          <h1>Accounts </h1>
          <h1>WazirX </h1>
        </div>
      </div>
      <div
        className="max-w-7xl m-14 flex font-bold border h-96"
        id="transaction"
      >
        <div>
          <h1>Transaction</h1>
        </div>
      </div>
    </div>
  );
}
export default UserAccounts;
