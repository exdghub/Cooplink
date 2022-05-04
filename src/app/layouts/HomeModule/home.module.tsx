import React from "react";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.home_wrapper}>
        <div className="container">
          <div className="left">Left</div>
          <div className="right">
            Right
            <button className="button">Button</button>
          </div>
        </div>
      </div>
    </>
  );
}
