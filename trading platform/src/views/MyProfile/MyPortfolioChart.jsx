// chart on my profile page. Currently only using dummy data.

import * as React from "react";
import { data } from "../../data/chartData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import { curveCardinal } from "d3-shape";

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
        <Tooltip />

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