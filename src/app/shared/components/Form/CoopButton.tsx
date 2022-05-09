import React from "react";
import "../../../../styles/themingComponent/formElement.scss" 

interface ButtonProps{
  btnName?: string;
  className?: string;
}

export default function CoopButton(props: ButtonProps) {
  const {btnName, className} = props
  return (
    <>
      <button className={`primary-text ${className}`}>
        {btnName}
      </button>
    </>
  );
}
