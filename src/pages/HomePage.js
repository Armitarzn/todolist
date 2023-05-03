import React from "react";
import  Assignments  from "../Components/Assignments";
import DailyTask from "../Components/DailyTask";
import NavbarHome from "../Components/NavbarHome";

function HomePage() {
  return (
    <div className="flex-col w-full">
      <div className="p-3">
        <NavbarHome />
      </div>
      <div className="p-3 xl:flex">
        <div className="mr-2 xl:w-1/3 mb-10">
          <DailyTask />
        </div>
        <div className="xl:w-2/3 ">
          <Assignments />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
