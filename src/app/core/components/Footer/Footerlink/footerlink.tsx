import React from "react";
import { Link } from "react-router-dom";

interface footerlinkProps {
  data?: any;
  title?: string;
  className?: string;
}

export default function FooterLink(props: footerlinkProps) {
  const { data, title, className } = props;
  return (
    <div>
      <div>
        <span className={`fw-600 text-uppercase`}>{title}</span>

        <ul className={`p-0 m-0 color-title`}>
          {data?.map((footerLink: any, index: any) => (
            <li key={index} className={` ${className}`}>
              <Link
                to={`${footerLink.link || "/"}`}
                className={`text-decoration-none color-title`}
              >
                {footerLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
