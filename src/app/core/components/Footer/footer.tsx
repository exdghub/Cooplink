import React from "react";
import SocialMedia from "../../../shared/components/SocialMedia";
import styles from "./footer.module.scss";
import FooterLink from "./Footerlink/footerlink";

interface footerProps {
  data?: any;
  title?: string;
  children?: any;
}

const company = [
  {
    title: "About us",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "Careers",
    link: "/careers",
  },
  {
    title: "Rates",
    link: "/rates",
  },
  {
    title: "Contact us",
    link: "/contact",
  },
];
const developers = [
  {
    title: "Docs",
    link: "/docs",
  },

  {
    title: "Integration",
    link: "/integration",
  },

  {
    title: "API Reference",
    link: "/reference",
  },
];

const support = [
  {
    title: "Support",
    link: "/about",
  },
  {
    title: "FAQ",
    link: "/about",
  },
];

export default function Footer(props: footerProps) {
  return (
    <>
      <section className={` bgcolor-footer ${styles["footer"]}`}>
        <div className={` container py-5`}>
          <div className={`d-flex ${styles["footer-content"]}`}>
            <div className={`d-block`}>
              <img src="x" alt="logo img" />
              <p className={`text-uppercase fw-600`}>Contact Address</p>
              <p className={`m-0`}>Charkhal, Dillibazar</p>
              <p className={`m-0`}> ask@nepalpayment.com</p>
              <p className={`m-0`}>+ (977) 1-4258304</p>
            </div>
            <FooterLink title={"Company"} data={company} />
            <FooterLink title={"Developers"} data={developers} />
            <FooterLink title={"Help & Support"} data={support} />
            <div >
              <span className={`text-uppercase fw-600`}>Find us Online</span>
              <div>
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className={`${styles["footer-bottom"]}`}>
            {/* <Copyright /> */}
          </div>
        </div>
      </section>
    </>
  );
}
