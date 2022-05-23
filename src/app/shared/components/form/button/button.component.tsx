import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ButtonProps } from "./button.types";

export default function CoopButton(props: ButtonProps) {
  const {
    btnName,
    className,
    onClick,
    dataToggle,
    dataTarget,
    hasIcon1,
    hasIcon2,
    icon1,
    icon2,
  } = props;
  return (
    <>
      <button
        className={`${className}`}
        onClick={onClick}
        data-bs-toggle={`${dataToggle}`}
        data-bs-target={`${dataTarget}`}
      >
        {hasIcon1 ? <FontAwesomeIcon icon={icon1} className="px-1" /> : ""}
        {btnName}
        {hasIcon2 ? <FontAwesomeIcon icon={icon2} className="px-1" /> : ""}
      </button>
    </>
  );
}
