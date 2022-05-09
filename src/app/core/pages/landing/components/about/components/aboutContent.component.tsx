import React from "react";
import CoopButton from "shared/components/form/button/button.component";
import { AboutContentProps } from "./aboutContent.types";



export default function AboutContent(props: AboutContentProps) {
  const { title, desc } = props;
  return (
    <>
      <div>
        <p className={`fw-600 main-text`}>{title}</p>
        <p className={`w-75`}>{desc}</p>
        <CoopButton className={`w-75 w-sm-25 mt-2 button-main`} btnName="Know More" />
      </div>
    </>
  );
}
