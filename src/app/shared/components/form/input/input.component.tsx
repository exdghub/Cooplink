import React, { useState } from "react";
import { InputProps } from "./input.types";




export default function CoopInput(props: InputProps) {
  const { label, type, name, id, placeholder, errorlabel, inputValue, onChange } = props;

  const [showPassword, setShowPassword] = useState(false);
  // const [passwordType, setPasswordType] = useState("password");
  //   const [passwordInput, setPasswordInput] = useState("");

  // const handlePasswordChange =(evnt:any)=>{
  //     setPasswordInput(evnt.target.value);
  // }
  // const togglePassword =()=>{
  //   if(passwordType==="password")
  //   {
  //    setPasswordType("text")
  //    return;
  //   }
  //   setPasswordType("password")
  // }
  return (
    <>
      <div className="form-group form-inline mb-3">
        <label className="form-label px-2 secondary-text" htmlFor={id}>
          {label}
        </label>
        <input
          type={type !== "password" ? type : showPassword ? "text" : "password"}
          className="form-control secondary-text"
          id={id}
          name={name}
          value={inputValue}
          //   aria-describedby="emailHelp"
          placeholder={placeholder}
          onChange={onChange}
        />
        {/* <span className="bi bi-eye form-control-feedback"></span> */}
        {/* {type === "password" ? (
          <>
            <div className="input-group-append">
              <span id="basic-addon2">
              <i className="bi bi-eye-slash"/>
              </span>
            </div>
          </>
        ) : (
          <i className="bi bi-eye"/>
        )} */}
        <small id="emailHelp" className="form-text text-muted">
          {errorlabel}
        </small>
      </div>
    </>
  );
}
