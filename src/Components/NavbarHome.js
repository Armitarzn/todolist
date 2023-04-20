import React from "react";
import { useSelector } from "react-redux";


function Header() {
  // hook usestate useeffect
  const userinfo = useSelector((state) => state.userinfo.user);
  return (
    <div className="flex h-28 bg-pink-100 justify-center align-middle ">
      {/* center  */}
      <h1 className=" font-serif text-5xl mt-6">
        {userinfo.name.toUpperCase()}'s todo list
      </h1>
    </div>
  );
}

export default Header;
