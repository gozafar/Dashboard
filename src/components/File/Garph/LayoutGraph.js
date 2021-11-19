import React from "react";
import GraphNav from "./GraphNav";
import Heading from "../../main/Heading";

function LayoutGraph({ children }) {
  return (
    <div>
      <Heading />
      {/* <GraphNav /> */}
      {children}
    </div>
  );
}

export default LayoutGraph;
