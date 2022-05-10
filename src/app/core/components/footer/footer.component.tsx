import React from "react";
import SocialMedia from "shared/components/socialMedia/socialMedia";
import { company, developers, support } from "./footer.data";
import styles from "./footer.module.scss";
import { footerProps } from "./footer.types";
import FooterLink from "./footerLink/footerLink.component";



export default function Footer(props: footerProps) {
  return (
    <>
      <section className={` bgcolor-primary ${styles["footer"]}`}>
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
