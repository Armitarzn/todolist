import React, {useEffect} from "react";
import { useSelector } from "react-redux";


function Header() {
  // hook usestate useeffect
  const userinfo = useSelector((state) => state.userinfo.user);
  useEffect(() => {
    console.log("hi", userinfo);
  }, []);
  return (
    <div className="flex h-28 bg-yellow-100 justify-center align-middle ">
      {/* center  */}
      <h1 className=" font-serif text-5xl mt-6">
        {userinfo.name.toUpperCase()}'S TODO LIST
      </h1>
    </div>
  );
}

export default Header;
