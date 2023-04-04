import React, {useState} from "react";
import BasicTextFields from "../Components/BasicTextFields";
import BasicButtons from "../Components/BasicButton";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userinfo";

function LoginPage() {
  const [name, setName] = useState("");
  const [familyname, setFamilyName] = useState("");
  const [age, setAge] = useState();

  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-slate-200">
      <div
        style={{ width: 800, height: 500 }}
        className="bg-slate-100 items-center justify-center flex flex-col rounded-3xl"
      >
        <p className="text-3xl mb-10">To do list</p>

        <BasicTextFields label="name" setValue={setName}/>
        <BasicTextFields label="familyname" setValue={setFamilyName} />
        <BasicTextFields label="age" setValue={setAge}/>
        <p style={{ cursor: "pointer" }} className="underline mb-6 mt-1">
          Forgot password?
        </p>
      
        <BasicButtons label="Login" onClick={() => {
          name.length !== 0 && familyname.length !== 0 && age == 10
          dispatch(setUser({
            name: "name",
            familyname:"password",
            age: "age"
          })
          );
        }}
        />
        <p className="mt-3">
          You don't have an acount?{" "}
          <NavLink to="/signup" className={"underline "}>
            {" "}
            Sign up
          </NavLink>
        </p>
        <p style={{ cursor: "pointer" }} className="underline"></p>
      </div>
    </div>
  );
}

export default LoginPage;
