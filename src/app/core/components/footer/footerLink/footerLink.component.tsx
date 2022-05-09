import React from "react";
import { Link } from "react-router-dom";
import { footerlinkProps } from "./footer.types";


export default function FooterLink(props: footerlinkProps) {
  const { data, title, className } = props;
  return (
    <div>
      <span className={`fw-600 text-uppercase`}>{title}</span>

      <div className={`p-0 m-0 color-title `}>
        {data?.map((footerLink: any, index: any) => (
          <p key={index} className={` ${className} p-0 m-0 `}>
            <Link
              to={`${footerLink.link || "/"}`}
              className={`text-decoration-none color-title`}
            >
              {footerLink.title}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
}
