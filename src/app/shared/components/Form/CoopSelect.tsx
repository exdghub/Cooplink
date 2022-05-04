import React from "react";
import "../../../../styles/themingComponent/formElement.scss";
interface SelectProps{
  text?: string;
  value?: string;
  label?: string;
}

export default function CoopSelect(props: SelectProps) {
  const {text, value, label} = props
  return (
    <>
      <div className="form-group mb-3">
        <label className="form-label px-2" htmlFor="formSelect">{label}</label>
        <select className="form-control form-select" id="formSelect" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </>
  );
}
