

import React from "react";
import { Chart } from "react-google-charts";
import data from "../../data/data";


const Deceased = () => {
    
    const confirmedData = data
      .filter(entry => entry.Status === "Deceased") 
      .map(entry => [entry.Date_YMD, entry.TT]);
  
    const options = {
      title: "Death",
      curveType: "function",
      legend: { position: "bottom" },
      colors: ["red"],
    };
  
    return (
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={[["Date", "Death"], ...confirmedData]}
        options={options}
      />
    );
  };
  
  export default Deceased;
