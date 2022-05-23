import React from "react";
import { FilterSelectProps } from "./filterSelect.types";

export default function CoopFilterSelect(props: FilterSelectProps) {
  const { text, value, label, className } = props;
  return (
    <div className={`form-group d-flex m-0 align-items-center ${className}`}>
      <label className="form-label m-0 px-2 secondary-text" htmlFor="formSelect">
        {label}
      </label>
      <select
        className="form-control form-select m-0 secondary-text custom-filter-select"
        id="formSelect"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  );
}
