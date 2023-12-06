import React from "react";
import FirstRow from "../Components/FirstRow";
import MyNavbar from "../Components/Navbar";
import SecondRow from "../Components/SecondRow";
import ThridRow from "../Components/ThridRow";
import FourthRow from "../Components/FourthRow";

const Dashboard = () => {
  return (
    <div className="w-100 h-100" style={{ background: "#F5F5F5" }}>
      <div className="container" style={{ width: "70vw" }}>
        <MyNavbar />
        <FirstRow />
        <SecondRow />
        <ThridRow />
        <FourthRow />
      </div>
    </div>
  );
};

export default Dashboard;
