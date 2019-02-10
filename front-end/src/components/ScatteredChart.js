import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data01 = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 }
];

const ScatteredChart = () => {
  return (
    <div>
      <h2>Sentimental Analysis</h2>

      <ScatterChart
        width={600}
        height={400}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey={"x"} name="data point" unit="" />
        <YAxis type="number" dataKey={"y"} name="emotion" unit="" />
        <ZAxis range={[100]} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="" data={data01} fill="#8884d8" line shape="cross" />
      </ScatterChart>
    </div>
  );
};

export default ScatteredChart;
