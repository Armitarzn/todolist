import React from "react";
import BasicTextFields from "../Components/BasicTextFields";
import BasicButtons from "../Components/BasicButton";
import Dropdownlist from "../Components/Dropdownlist"

function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-slate-200">
      <div
        style={{ width: 800, height: 500 }}
        className="bg-red-50 items-center justify-center flex flex-col rounded-3xl border-2 border-blue-700"
      >
        <BasicTextFields label="First Name" />
        <BasicTextFields label="Last Name" />
        <BasicTextFields label="Email" />
        <p className="text-gray-600">Birthday</p>
        <p>Already have an acount?</p>
        <p style={{ cursor: "pointer" }} className="underline">
          Log in
        </p>
        <Dropdownlist />
        <BasicTextFields label="Password" />
        <BasicButtons label="Sign Up" />
      </div>
    </div>
  );
}

export default SignupPage;
