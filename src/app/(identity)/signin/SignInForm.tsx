"use client";
import React, { forwardRef, useImperativeHandle, useState } from "react";

type SignInFormData = {
  email: string;
  password: string;
};
interface SignInFormProps extends Partial<SignInFormData> {
  onSubmit: (data: SignInFormData) => void;
}
type SignInFormRef = {
  getSignInFormData: () => {
    email: string;
    password: string;
  };
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  submit: () => void;
};
const SignInForm = forwardRef<SignInFormRef, SignInFormProps>(
  ({ email: _email, password: _password, onSubmit }, ref) => {
    const [email, setEmail] = useState(_email ?? "");
    const [password, setPassword] = useState(_password ?? "");
    function getSignInFormData() {
      return {
        email,
        password,
      };
    }
    function submit() {
      onSubmit(getSignInFormData());
    }
    useImperativeHandle(ref, () => {
      const result = {
        getSignInFormData,
        setEmail,
        setPassword,
        submit,
      };
      return result;
    });
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          Username / Email :{" "}
          <input
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          Password :{" "}
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign In</button>
        </form>
      </div>
    );
  },
);

SignInForm.displayName = "SignInForm";
export default SignInForm;
