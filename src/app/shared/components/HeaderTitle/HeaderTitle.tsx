import React from "react";
import styles from "./headerTitle.module.scss";

interface TitleProps {
  titleText?: string;
  colorText?: string;
  className?: string;
  subTitle?: boolean;
  desc?: string;
}

export default function HeaderTitle(props: TitleProps) {
  const { titleText, colorText, className, subTitle, desc } = props;

  return (
    <>
      <div>
        <h2 className={`main-title text-center  ${className} ${styles["headerText"]}`}>
          {titleText}
          <span className={`color-primary`}>{colorText}</span>
        </h2>

        {subTitle?
        <p className={`text-center px-2 py-5`}>{desc}</p>
        : ""}        
      </div>
    </>
  );
}
