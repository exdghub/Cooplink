import React from "react";
import { ButtonProps } from "./button.types";

export default function CoopButton(props: ButtonProps) {
  const { btnName, className, onClick, dataToggle, dataTarget } = props;
  return (
    <>
      <button
        className={`primary-text ${className}`}
        onClick={onClick}
        data-bs-toggle={`${dataToggle}`}
        data-bs-target={`${dataTarget}`}
      >
        {btnName}
      </button>
    </>
  );
}
