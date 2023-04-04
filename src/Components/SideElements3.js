import React from "react";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PublicIcon from "@mui/icons-material/Public";
import StopWatchIcon from "@mui/icons-material/Timer";

function SideElements3() {
  return (
    <div className="bg-orange-300">
      <div className="flex justify-between">
        <div style={{ height: 600 }}>
          <HourglassBottomIcon />
          <h2
            className=" font-serif text-2xl md:text-3xl lg:text-4xl ml-5 mb-3"
            style={{ cursor: "pointer" }}
          >
            Timer
          </h2>
          <StopWatchIcon />
          <h2
            className=" font-serif text-2xl md:text-3xl lg:text-4xl ml-5 mb-3"
            style={{ cursor: "pointer" }}
          >
            StopWatch
          </h2>
          <NotificationsActiveIcon />
          <h2 className=" font-serif font-bold text-2xl md:text-3xl lg:text-4xl ml-5 mb-3 text-white">
            Alarm
          </h2>
          <PublicIcon />
          <h2
            className=" font-serif text-2xl md:text-3xl lg:text-4xl ml-5 mb-3"
            style={{ cursor: "pointer" }}
          >
            World Clock
          </h2>
        </div>
      </div>
    </div>
  );
}

export default SideElements3;
