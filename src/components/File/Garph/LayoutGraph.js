import React from "react";
import Heading from "../../main/Heading";

function LayoutGraph({ children }) {
  return (
    <div>
      <Heading />
      {children}
    </div>
  );
}

export default LayoutGraph;
