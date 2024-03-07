

import React from "react";
import { Chart } from "react-google-charts";
import data from "../../data/data";

const CardGraph = () => {
    
    const confirmedData = data
      .filter(entry => entry.Status === "Confirmed") 
      .map(entry => [entry.Date_YMD, entry.TT]);
  
    const options = {
      title: "Confirmed Cases",
      curveType: "function",
      legend: { position: "bottom" },
      colors: ["#8DDAF7"],
    };
  
    return (
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={[["Date", "Cases"], ...confirmedData]}
        options={options}
      />
    );
  };
  
  export default CardGraph;
