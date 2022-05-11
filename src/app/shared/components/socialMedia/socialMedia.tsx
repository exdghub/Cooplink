import React from "react";
import facebook from "assets/images/svg/facebook.svg"
import instagram from "assets/images/svg/instagram.svg"
import linkedin from "assets/images/svg/linkedin.svg"
import twitter from "assets/images/svg/twitter.svg";
import styles from "./socialMedia.module.scss";

export default function SocialMedia() {
  return (
    <>
      <div>
        <img src={facebook} alt="Facebook" className={styles["social__icons"]} />
        <img src={instagram} alt="Instagram" className={styles["social__icons"]} />
        <img src={linkedin} alt="Linkedin" className={styles["social__icons"]} />
        <img src={twitter} alt="Twitter" className={styles["social__icons"]} />
      </div>
    </>
  );
}
