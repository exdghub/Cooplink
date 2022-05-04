import React, { useState } from "react";
import "../../../../styles/themingComponent/formElement.scss"

interface InputProps{
    type?: string;
    name?: string;
    id?: string;
    placeholder?: string;
    label?: string;
    errorlabel?: string;
}

export default function CoopInput(props: InputProps) {
  const {label,type, name, id, placeholder, errorlabel} = props  
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label px-2" htmlFor={id}>{label}</label>
        <input
          type={type}
          className="form-control"
          id={id}
          name={name}
        //   aria-describedby="emailHelp"
          placeholder={placeholder}
        />

        <small id="emailHelp" className="form-text text-muted">
          {errorlabel}
        </small>
      </div>
    </>
  );
}
