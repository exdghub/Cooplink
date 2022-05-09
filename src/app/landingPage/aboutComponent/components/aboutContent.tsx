import React from "react";
import CoopButton from "../../../shared/components/Form/CoopButton";

interface AboutContentProps {
  title?: string;
  desc?: string;
}

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
