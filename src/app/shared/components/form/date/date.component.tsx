import React from "react";
import { useState } from "react";
import { DateProps } from "./date.types";

const CoopDate = (props: DateProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    errorlabel,
    inputValue,
    className,
    onChange,
    hasToggle,
    toggleValues,
  } = props;
  //toggle state
  const [toggle, setToggle] = useState(false);

  //selected state
  const selected = !toggle ? toggleValues[0] : toggleValues[1];

  //handle date toggle
  const onToggle = (e: any) => {
    try {
      onChange &&
        onChange(
          //opposite of current selected because toggle
          toggle ? toggleValues[0] : toggleValues[1]
        );
    } catch (error: any) {
      console.log(error);
    }

    setToggle(!toggle);
  };
  return (
    <div className={`form-group mb-3 ${className}`}>
      <label className="form-label px-2 secondary-text" htmlFor={id}>
        {label}
      </label>
      <div className={`d-flex`}>
        <input
          type={"text"}
          className="form-control secondary-text"
          id={id}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={onChange}
        />
        {hasToggle && (
        <button
          className="ml-3 button-toggle"
          value={selected}
          onClick={onToggle}
        >
          {selected}
        </button>
        )}
      </div>

      <small id="emailHelp" className="form-text text-muted">
        {errorlabel}
      </small>
    </div>
  );
}

export default CoopDate;