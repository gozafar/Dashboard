import { useState, useEffect } from "react";

function Tables(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/zafar").then((res) => {
      res.json().then((results) => {
        console.log(results);
        setData(results);
      });
    });
  }, []);

  console.log(data, "smting");
  // console.log("smting")
  return (
    <div>
      {data ? (
        <div>
          <table className="border-2">
            <thead>
              <tr className="border-2">
                <th className="border-2 color-primary">Id</th>
                <th className="border-2">Name </th>
                <th className="border-2">Email </th>
                <th className="border-2">Mobile No </th>
                <th className="border-2">Gender </th>
                <th className="border-2">Added By</th>
                <th className="border-2 w-36">DOB </th>
                <th className="border-2">DOJ</th>
                <th className="border-2">Department </th>
                <th className="border-2">Position</th>
                <th className="border-2">Work Type </th>
                <th className="border-2">Salary</th>
                <th className="border-2">Account No</th>
                <th className="border-2">IFSC Code:</th>
                <th className="border-2">Aadhar No</th>
                <th className="border-2">PAN No </th>
                <th className="border-2">Referred By </th>
                <th className="border-2">Address </th>
                <th className="border-2">City</th>
                <th className="border-2">State</th>
              </tr>
            </thead>
            <tbody>
              {data.map((items, i) => (
                <tr className="space-x-5 pl-5">
                  <td className="border-2 ">{items.id}</td>
                  <td className="border-2 pl-5">{items.name}</td>
                  <td className="border-2 pl-5">{items.email}</td>
                  <td className="border-2 pl-5">{items.mobile}</td>
                  <td className="border-2 pl-5">{items.gender}</td>
                  <td className="border-2">{items.addedby}</td>
                  <td className="border-2 w-36">{items.dob}</td>
                  <td className="border-2">{items.doj}</td>
                  <td className="border-2">{items.department}</td>
                  <td className="border-2">{items.position}</td>
                  <td className="border-2">{items.workType}</td>
                  <td className="border-2">{items.salary}</td>
                  <td className="border-2">{items.accountNo}</td>
                  <td className="border-2">{items.iFSCCode}</td>
                  <td className="border-2">{items.aadharNo}</td>
                  <td className="border-2">{items.pANNo}</td>
                  <td className="border-2">{items.referredBy}</td>
                  <td className="border-2">{items.address}</td>
                  <td className="border-2">{items.city}</td>
                  <td className="border-2">{items.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Please Wait........</p>
      )}
    </div>
  );
}

export default Tables;
