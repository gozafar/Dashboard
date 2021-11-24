import React from "react";

function Complete(props) {
  return (
    <div style={{ backgroundColor: "#F8F0F0" }}>
      <div className="reg-main">
        <div>
          <table className="border-2 ">
            <thead >
              <tr className="border-2 ">
                <th className="border-1 ">Name </th>
                <th className="border-1">Email </th>
                <th className="border-1">Mobile No </th>
                <th className="border-1">City</th>
                <th className="border-1 ">C|E</th>
                <th className="border-1 ">Accounts</th>
                <th className="border-1 ">Txn</th>
                <th className="border-1 ">Registered</th>
                <th className="border-1 ">Login</th>
              </tr>
            </thead>
          </table>
        </div>
        Complete Registration
      </div>
    </div>
  );
}

export default Complete;
