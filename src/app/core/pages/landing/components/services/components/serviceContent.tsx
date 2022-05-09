import React from "react";
import { ServiceContentProps } from "./serviceContent.types";


export default function ServiceContent(props: ServiceContentProps) {
  const { title, desc, toggleName } = props;
  return (
    <>
      <div className={`py-3`}>
        <p className={`fw-600`}>{title}</p>
        <p className={`secondary-text w-75`}>{desc}</p>
        <p className={`fw-600 secondary-text color-primary`}>
          Read More
          <i className=" fw-600 bi bi-chevron-right"></i>
        </p>
      </div>
    </>
  );
}
