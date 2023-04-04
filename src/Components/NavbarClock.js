import React from "react";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

function NavbarClock() {
  return (
    <div className="flex justify-around bg-amber-100 " style={{ height: 80 }}>
      {/* left */}
      <div className="flex">
        <HomeIcon
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
          }}
        />
        <EventNoteIcon
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
          }}
        />
        <NewspaperIcon
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
          }}
        />
      </div>
      {/* center */}
      <h1 className=" font-serif font-bold text-2xl md:text-3xl lg:text-4xl">
        CLOCK
      </h1>
      {/* right */}
      <div>
        <SettingsIcon
          style={{
            width: 40,
            height: 40,
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}

export default NavbarClock;
