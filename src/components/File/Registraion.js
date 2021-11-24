import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style.css";
import PaginationSize from "./Pagination";

function Registraion(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="registration-m ">
      <div className="registration-l ">
        <div>
          <input
            className="search-bar"
            type="text"
            placeholder="Enter username,email,mobile number..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div className="date-p">
          <DateRangePickerComponent
            placeholder="Enter a Date Here "
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </div>
      </div>
      <div className="reg-row">
        <Link to="/NewRegister">
          <span>Register</span>
        </Link>
        <Link to="/Incomplete">
          <span>Incomplete</span>
        </Link>
        <Link to="/Complete">
          <span> Complete</span>
        </Link>
        <Link to="/Letest">
          <span>Latest</span>
        </Link>
        <Link to="/MyClients">
          <span> My Clients</span>
        </Link>
        <Link to="/MyNotes">
          <span>My Notes</span>
        </Link>
      </div>

      {/* <div>
        <PaginationSize />
      </div> */}
    </div>
  );
}
export default Registraion;
