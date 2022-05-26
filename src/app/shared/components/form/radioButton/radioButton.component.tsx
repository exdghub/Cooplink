import React from "react";
import { RadioButtonProps } from "./radioButton.types";

export default function CoopRadioButton(props: RadioButtonProps) {
  const { label, radioLabel, radioLabel2, name, id, placeholder, errorlabel, inputValue, className, onChange } = props;
  return (
    <>
      <div className="">
        <label className="form-label px-2 secondary-text" >{label}</label>
        <div className="d-flex ">
          <div className="form-check form-check-inline d-flex m-0 p-0 align-items-center ">
            <input
              // className="form-check-input with-gap"
              type="radio"
              name="radiobtn"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label pl-1" htmlFor="inlineRadio1">
              {radioLabel}
            </label>
          </div>
          <div className="form-check form-check-inline d-flex align-items-center ">
            <input
              // className=" with-gap "
              type="radio"
              name="radiobtn"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label pl-1" htmlFor="inlineRadio2">
            {radioLabel2}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
