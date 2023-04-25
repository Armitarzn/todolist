import React from "react";
import  Assignments  from "../Components/Assignments";
import DailyTask from "../Components/DailyTask";
import NavbarHome from "../Components/NavbarHome";

function HomePage() {
  return (
    <div className="flex-col w-full ">
      <div className="p-3">
        <NavbarHome />
      </div>
      <div className=" lg:flex-row flex-col p-2">
        <div className="mr-2 lg:w-2/5">
          <DailyTask />
        </div>
        <div className="lg:w-3/5">
          <Assignments />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
