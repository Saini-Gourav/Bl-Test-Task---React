

import React from 'react';
import { Chart } from "react-google-charts";
import data from '../../data/data';
const PaiChart = () => {
  const confirmedCases = data.filter(entry => entry.Status === "Confirmed").reduce((acc, curr) => acc + curr.TT, 0);
  const recoveredCases = data.filter(entry => entry.Status === "Recovered").reduce((acc, curr) => acc + curr.TT, 0);
  const deceasedCases = data.filter(entry => entry.Status === "Deceased").reduce((acc, curr) => acc + curr.TT, 0);

  const chartData = [
    ["Status", "Total"],
    ["Confirmed", confirmedCases],
    ["Deceased", deceasedCases],
    ["Recovered", recoveredCases],
  ];

  const options = {
    title: "COVID-19 Cases",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="100%"
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default PaiChart;

