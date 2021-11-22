import React from "react";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import "../../style.css";



function Registraion(props) {
  return (
    <div  className="registration-m ">
      
        <div className="registration-l ">
      
          <div >
          <input className="search-bar "  type="text" placeholder="Enter username,email,mobile number..." />
          </div>
         
          <div className="date-p " >
          <DateRangePickerComponent  placeholder="Enter a Date Here " />
          </div>
          
 
        </div>
        <div className="reg-row">
            <span>Register</span>
            <span>Incomplete</span>
            <span> Complete</span>
            <span>Latest</span>
            <span> My Clients</span>
            <span>My Notes</span>
          </div>
    
    </div>
  );
}

export default Registraion;
