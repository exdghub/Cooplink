import React from "react";
import { ButtonProps } from "./button.types";

export default function CoopButton(props: ButtonProps) {
  const { btnName, className, onClick } = props
  return (
    <>
      <button className={`primary-text ${className}`} onClick={onClick} >
        {btnName}
      </button>
    </>
  );
}
