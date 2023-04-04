import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

function DailyTask() {
  return (
    <div className="bg-orange-300">
      <div className="flex justify-between">
        <div style={{ height: 600 }}>
          <h1 className=" font-serif font-bold text-2xl md:text-3xl lg:text-4xl ml-5 mb-3">
            DailyTask
          </h1>
          <div>
            <div className="flex font-serif justify-between mb-2 ml-2">
              <p>Taking a Shower</p>
              <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
            </div>
            <div className="flex font-serif justify-between mb-2 ml-2">
              <p>Doing my homework</p>
              <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
            </div>
            <div className="flex font-serif justify-between mb-2 ml-2">
              <p>Making Dinner</p>
              <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
            </div>
            <div className="flex font-serif justify-between mb-2 ml-2">
              <p>English class</p>
              <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
            </div>
            <div className="flex font-serif justify-between mb-2 ml-2">
              <p>...</p>
              <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
            </div>
            <div className="flex font-serif justify-between mb-2 ml-2">
              <p>...</p>
              <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
            </div>
            <div className="flex font-serif justify-between mb-2 ml-2">
              <p>...</p>
              <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
        <AddIcon style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default DailyTask;
