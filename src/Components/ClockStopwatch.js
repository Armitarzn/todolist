import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import FlagIcon from "@mui/icons-material/Flag";
import ReplayIcon from "@mui/icons-material/Replay";
//import OpenInFullIcon from '@mui/icons-material/OpenInFull';

function ClockStopwatch() {
  return (
    <div className="bg-orange-300">
      <div className="flex justify-between">
        <div style={{ height: 600 }}>
          <h1 className="text-8xl mt-44 ml-56">
            00 : 00 : 00
            <span className="text-5xl mt-48 "> . 00</span>
          </h1>
          <PlayCircleFilledWhiteIcon
            style={{ width: 60, height: 60, cursor: "pointer" }}
            className="mt-8 ml-96 mr-24"
          />
          <FlagIcon
            style={{ width: 60, height: 60, cursor: "pointer" }}
            className="mt-8 ml-8"
          />
          <ReplayIcon
            style={{ width: 60, height: 60, cursor: "pointer" }}
            className="mt-8 ml-8 mr-60"
          />
        </div>
      </div>
    </div>
  );
}

export default ClockStopwatch;
