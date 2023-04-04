import React from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

function Assignments() {
  return (
    <div className="bg-orange-300">
      <div className="flex justify-between">
        <div style={{ height: 600 }}>
          <h1 className=" font-serif font-bold text-2xl md:text-3xl lg:text-4xl ml-5 mb-3">
            Assignments
          </h1>
          <div className="flex font-serif justify-between mb-2 ml-2">
            <p>Biology essay</p>
            <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
          </div>
          <div className="flex font-serif justify-between mb-2 ml-2">
            <p>Physics presentation</p>
            <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
          </div>
          <div className="flex font-serif justify-between mb-2 ml-2">
            <p>AutoCAD plan</p>
            <CheckBoxOutlineBlankIcon style={{ cursor: "pointer" }} />
          </div>
          <div className="flex font-serif justify-between mb-2 ml-2">
            <p>Math Project</p>
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
        <AddIcon style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default Assignments;
