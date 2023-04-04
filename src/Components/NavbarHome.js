import React, { useEffect } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";

function Navbar() {
  // hook usestate useefect
  // const [first, setfirst] = useState(9);
  const user = useSelector ((state) => state.userinfo.user);
  useEffect(() => {
    console.log("hi", user)
  }, []);
  // function add1() {
  //  setfirst(first + 1);
  //}
  //return <div></div>;
  return (
    <div className="flex justify-around bg-amber-100 " style={{ height: 80 }}>
      {/* left */}
      <div className="flex">
        <AccessAlarmIcon
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
        YOUR TODO LIST
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

export default Navbar;
