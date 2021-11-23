import React, { useState } from "react";
import "../../App.css";
import MonthGraph from "./Garph/MonthGraph";
import WeekGraph from "./Garph/WeekGraph";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { IStackTokens, Stack } from "@fluentui/react/lib/Stack";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownStyles,
  IDropdownOption,
} from "@fluentui/react/lib/Dropdown";

function Account(props) {
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState(null);
  const handle = (data) => {
    console.log("adding", data);
  };
  const zafar = (e, data) => {
    console.log("addinging", data);
  };

  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 200, float: "right", marginRight: "115px" },
    dropdownOptionText: { overflow: "visible", whiteSpace: "normal" },
    dropdownItem: { height: "auto" },
  };

  const options: IDropdownOption[] = [
    { key: "broccoli", text: "Broccoli" },
    { key: "carrot", text: "Carrot" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },

    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
    { key: "lettuce", text: "Lettuce" },
  ];

  const stackTokens: IStackTokens = { childrenGap: 20 };
  return (
    <div>
      <div className="bg-red-50 text-black">
        <div className="main-menu flex p-6 flex-wrap justify-evenly">
          <div className="w-60 h-36 border">Total Accounts</div>
          <div className="w-60 h-36 border">Today Created Accounts</div>
          <div className="w-60 h-36 border">Yesterday Created Accounts</div>
          <div className="w-60 h-36 border">Week Created Accounts</div>
        </div>
        <div className="flex flex-wrap justify-evenly h-80 p-6 font-bold">
          <div className="w-1/4 border">Total Accounts</div>
          <div className="w-1/4 border">Total Accounts</div>
          <div className="w-1/4 border">Total Accounts</div>
        </div>
        <div>
          <div className="">
            <Stack tokens={stackTokens}>
              <Dropdown
                onChange={zafar}
                placeholder="Select an Exchangers"
                options={options}
                styles={dropdownStyles}
              />
            </Stack>
          </div>
        </div>
        <div className="p-4">
          <div className=" text-black chart max-w-screen min-w-min h-96 relative border font-bold ">
            <div className="flex ">
              {/* <h1>Graph</h1> */}
              <button
                className="
              absolute top-1 right-56
              font-bold "
                onClick={() => setShow(false)}
              >
                MonthGraph
              </button>
              <button
                className=" font-bold absolute top-1 left-5"
                onClick={() => setShow(true)}
              >
                WeekGraph
              </button>
              <div
                className="
              absolute top-0 right-5"
              >
                <DateRangePickerComponent
                  placeholder="Enter a Date Here "
                  change={handle}
                />
              </div>
            </div>
            <div className="mt-10  w-4/5">
              {show ? <WeekGraph /> : <MonthGraph />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
