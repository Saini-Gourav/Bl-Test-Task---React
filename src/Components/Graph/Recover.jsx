import React from "react";
import { Chart } from "react-google-charts";
import data from "../../data/data";



const Recover = () => {
    
    const confirmedData = data
      .filter(entry => entry.Status === "Recovered") 
      .map(entry => [entry.Date_YMD, entry.TT]);
  
    const options = {
      title: "Recover",
      curveType: "function",
      legend: { position: "bottom" },
      colors: ["Green"],
    };
  
    return (
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={[["Date", "Recoverd"], ...confirmedData]}
        options={options}
      />
    );
  };
  
  export default Recover;
