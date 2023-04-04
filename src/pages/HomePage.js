import React from 'react'
import Assignments from "../Components/Assignments";
import DailyTask from "../Components/DailyTask";
import NavbarHome from "../Components/NavbarHome";
import NavbarClock from "../Components/NavbarClock";
import SideElements1 from "../Components/SideElements";
import ClockTimer from "../Components/ClockTimer";
import SideElements2 from "../Components/SideElements2";
import ClockStopwatch from "../Components/ClockStopwatch";
import SideElements3 from "../Components/SideElements3";
import ClockAlarm from "../Components/ClockAlarm";
import SideElements4 from "../Components/SideElements4";
import WorldClock from "../Components/WorldClock";



function HomePage() {
  return (
    <div className="flex-col w-full h-full">
      <div className="mb-1 ml-2 mr-2 mt-2">
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
      <div className="flex-col w-full h-full">
        <div className="mb-1 ml-2 mr-2 mt-2">
          <NavbarClock />
        </div>
      </div>
      <div className="flex p-2">
        <div className=" mr-2 w-2/5">
          <SideElements1 />
        </div>
        <div className="w-3/5">
          <ClockTimer />
        </div>
      </div>
      <div className="flex-col w-full h-full">
        <div className="mb-1 ml-2 mr-2 mt-2">
          <NavbarClock />
        </div>
      </div>
      <div className="flex p-2">
        <div className=" mr-2 w-2/5">
          <SideElements2 />
        </div>
        <div className="w-3/5">
          <ClockStopwatch />
        </div>
      </div>
      <div className="flex-col w-full h-full">
        <div className="mb-1 ml-2 mr-2 mt-2">
          <NavbarClock />
        </div>
      </div>
      <div className="flex p-2">
        <div className=" mr-2 w-2/5">
          <SideElements3 />
        </div>
        <div className="w-3/5">
          <ClockAlarm />
        </div>
      </div>
      <div className="flex-col w-full h-full">
        <div className="mb-1 ml-2 mr-2 mt-2">
          <NavbarClock />
        </div>
      </div>
      <div className="flex p-2">
        <div className=" mr-2 w-2/5">
          <SideElements4 />
        </div>
        <div className="w-3/5">
          <WorldClock />
        </div>
      </div>
    </div>
  )
}

export default HomePage