import React from "react";
import cooplogo from "assets/images/cooplogo.png";
import styles from "./logo.module.scss";
export default function Logo() {
  return (
    <>
      <img
        src={cooplogo}
        alt="cooplink"
        className={`${styles["custom-logo"]}`}
      />
    </>
  );
}
