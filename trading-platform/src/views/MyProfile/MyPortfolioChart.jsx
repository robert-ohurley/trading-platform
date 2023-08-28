import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { curveCardinal } from "d3-shape";

const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
const cardinal = curveCardinal.tension(0.0);

export default function MyPortfolioChart() {
  return (
    <>
      <AreaChart
        width={550}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
        >
        <CartesianGrid strokeDasharray="4 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip  />

        <Area
          type={cardinal}
          dataKey="uv"
          stroke="#4fdfb1"
          fill="#fbb142"
          fillOpacity={0.3}
          />
      </AreaChart>
    </>
  );
}