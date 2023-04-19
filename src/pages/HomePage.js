import React from "react";
import  Assignments  from "../Components/Assignments";
import DailyTask from "../Components/DailyTask";
import NavbarHome from "../Components/NavbarHome";

function HomePage() {
  return (
    <div className="flex-col w-full h-full fixed">
      <div className="p-3">
        <NavbarHome />
      </div>
      <div className="flex p-2">
        <div className="mr-2 w-2/5">
          <DailyTask />
        </div>
        <div className="w-3/5">
          <Assignments />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
