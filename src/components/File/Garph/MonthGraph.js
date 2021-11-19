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
];

function MonthGraph(props) {
  return (
    <div className="">
      <h1 className="">MonthGraph</h1>
      <ComposedChart
        width={700}
        height={600}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="Date" />
        <YAxis />
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
