import React from "react";

import {
  BarChart,
  ComposedChart,
  ComposedChartProps,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const styles = {
  boxSizing: "border-box",
  padding: "10px",
  width: "800px",
  height: "800px",
  backgroundColor: "#fff"
};

const data = [
  { name: "Page A", uv: 0, pv: 800, amt: 0 },
  { name: "Page B", uv: 0, pv: 967, amt: 0 },
  { name: "Page C", uv: 0, pv: 1098, amt: 0 },
  { name: "Page D", uv: 0, pv: 1200, amt: 0 },
  { name: "Page E", uv: 0, pv: 1108, amt: 0 },
  { name: "Page F", uv: 0, pv: 680, amt: 0 }
];

const SimpleBarChart = () => {
  return (
    <ComposedChart
      layout="vertical"
      width={600}
      height={400}
      data={data}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Tooltip />
      <Legend />
      <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      <Line dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default SimpleBarChart;
