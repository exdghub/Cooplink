import React from "react";

interface CheckProps {
  label?: string;
}

export default function CoopCheck(props: CheckProps) {
  const { label } = props;
  return (
    <>
      <div className="form-check mb-4 d-flex align-items-center">
        <input type="checkbox" className="form-check-input" id="formCheck" />
        <label className="form-check-label sub-text mx-1" htmlFor="formCheck">
          {label}
        </label>
      </div>
    </>
  );
}
