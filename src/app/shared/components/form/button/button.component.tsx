import React from "react";
import { ButtonProps } from "./button.types";

export default function CoopButton(props: ButtonProps) {
  const { btnName, className } = props
  return (
    <>
      <button className={`primary-text ${className}`}>
        {btnName}
      </button>
    </>
  );
}
