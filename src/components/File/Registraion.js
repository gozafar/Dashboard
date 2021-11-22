import React from "react";


function Registraion(props) {
  return (
    <div style={{
      background: "#f8f0f0",
    }}>
      <div  >
        <div style={{
          display:"flex",
          flexDirection:"row"
        }}>
        <div>
          <input className="search-bar" type="text" placeholder="Enter username,email,mobile number..." />
          searchbar
        </div>
        <div>
          filter bar
        </div>
        <div>
          date symbol
        </div>
        </div>

      </div>
      <div>
        
      </div>
     
    </div>
  );
}

export default Registraion;
