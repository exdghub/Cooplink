import React from "react";
import { SelectProps } from "./select.types";


export default function CoopSelect(props: SelectProps) {
  const { text, value, label, className } = props;
  return (
    <>
      <div className={`form-group mb-3 w-100 ${className}`}>
        <label className="form-label px-2 secondary-text" htmlFor="formSelect">
          {label}
        </label>
        <select
          className="form-control form-select secondary-text"
          id="formSelect"
        >
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
