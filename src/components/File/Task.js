import React from "react";
import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
} from "@fluentui/react";
const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};
function Task(props) {
  return (
    <div>
      <Pivot aria-label="Basic Pivot Example">
        <PivotItem
          headerText="My Files"
          headerButtonProps={{
            "data-order": 1,
            "data-title": "My Files Title",
          }}
        >
          <Label styles={labelStyles}>
            Pivot #1
            <div className="bg-red-50 text-black">
              <div className="main-menu flex p-6 flex-wrap justify-evenly  ">
                <div className="w-56 h-36 border">Registered Today</div>
                <div className="w-56 h-36  border">Registered Yesterday</div>
                <div className="w-56 h-36  border">Total Registred</div>
                <div className="w-56 h-36  border ">
                  Incomplete Registration
                </div>
              </div>
            </div>
          </Label>
        </PivotItem>
        <PivotItem headerText="Recent">
          <Label styles={labelStyles}>
            Pivot #2
            <div className="bg-red-50 text-black">
              <div className="main-menu flex p-6 flex-wrap justify-evenly  ">
                <div className="w-56 h-36 border">Registered Today</div>
                <div className="w-56 h-36  border">Registered Yesterday</div>
                <div className="w-56 h-36  border">Total Registred</div>
                <div className="w-56 h-36  border ">
                  Incomplete Registration
                </div>
              </div>
            </div>
          </Label>
        </PivotItem>
        <PivotItem headerText="Shared with me">
          <Label styles={labelStyles}>
            Pivot #3
            <div className="bg-red-50 text-black">
              <div className="main-menu flex p-6 flex-wrap justify-evenly  ">
                <div className="w-56 h-36 border">Registered Today</div>
                <div className="w-56 h-36  border">Registered Yesterday</div>
                <div className="w-56 h-36  border">Total Registred</div>
                <div className="w-56 h-36  border ">
                  Incomplete Registration
                </div>
              </div>
            </div>
          </Label>
        </PivotItem>
      </Pivot>
    </div>
  );
}

export default Task;
