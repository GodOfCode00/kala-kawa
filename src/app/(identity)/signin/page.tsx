"use client";
import React from "react";
import SignInForm from "./SignInForm";

function SignIn() {
  return (
    <div>
      <SignInForm onSubmit={console.log} />
    </div>
  );
}

export default SignIn;
