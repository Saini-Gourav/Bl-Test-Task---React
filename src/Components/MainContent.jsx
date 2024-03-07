import React from "react";
import TopNavbar from "./TopNavbar";
import Aside from "./Aside";
import Card from "./Card";
import BarChart from "./Graph/BarChart";
import LastSection from "./LastSection";

const MainContent = () => {
  return (
    <>
      <div className="main-content">
        <TopNavbar />
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <div style={{width:"100%"}}>
            <Card />
            <BarChart />
            <LastSection />
          </div>
          <Aside />
        </div>
      </div>
    </>
  );
};

export default MainContent;
