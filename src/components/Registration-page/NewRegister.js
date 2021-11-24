import React from "react";

function NewRegister(props) {
  return (
    <div style={{ backgroundColor: "#F8F0F0" }}>
      <div className="reg-main">
        <div>
          <table className="border-2">
            <thead>
              <tr className="border-2">
                <th className="border-1 ">Name </th>
                <th className="border-1">Email </th>
                <th className="border-1">Mobile No </th>
                <th className="border-2">City</th>
                <th className="border-2 ">C|E</th>
                <th className="border-2 ">Accounts</th>
                <th className="border-2 ">Txn</th>
                <th className="border-2 ">Registered</th>
                <th className="border-2 ">Login</th>
              </tr>
            </thead>
          </table>
        </div>
        New Registration
      </div>
    </div>
  );
}

export default NewRegister;
