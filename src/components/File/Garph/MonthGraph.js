import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
// const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
const data = [
  {
    Date: "01/01/2021",
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    Date: "01/02/2021",

    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    Date: "01/03/2021",

    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    Date: "1/4/2021",

    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    Date: "01/05/2021",

    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    Date: "01/06/2021",

    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/07/2021",

    uv: 1400,
    pv: 780,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/08/2021",

    uv: 1400,
    pv: 880,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/09/2021",

    uv: 1400,
    pv: 980,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/10/2021",

    uv: 1400,
    pv: 480,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/11/2021",

    uv: 1400,
    pv: 580,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/12/2021",

    uv: 1400,
    pv: 780,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/01/2022",

    uv: 1400,
    pv: 880,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/02/2022",

    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/03/2022",

    uv: 1400,
    pv: 980,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/04/2022",

    uv: 2000,
    pv: 880,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/05/2022",

    uv: 1400,
    pv: 780,
    amt: 1700,
    cnt: 380,
  },
  {
    Date: "01/06/2022",

    uv: 1600,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

function MonthGraph(props) {
  return (
    <div className="text-white">
      {/* <h1 className="">MonthGraph</h1> */}
      <ComposedChart
        className="text-white"
        width={900}
        height={360}
        data={data}
        margin={{
          // top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f6" />
        <XAxis dataKey="Date" stroke="#000" />
        <YAxis stroke="#000" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Scatter dataKey="cnt" fill="red" />
      </ComposedChart>
    </div>
  );
}

export default MonthGraph;
