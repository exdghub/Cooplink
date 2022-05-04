import React from "react";
import { Link } from "react-router-dom";
import CoopButton from "../shared/components/Form/CoopButton";
import CoopCheck from "../shared/components/Form/CoopCheck";
import CoopInput from "../shared/components/Form/CoopInput";
import CoopSelect from "../shared/components/Form/CoopSelect";
import styles from "./login.module.scss";

export default function Login(props: any) {
  return (
    <>
      <div className={styles.login_wrapper}>
        <div className={`col-6 d-none d-sm-none d-md-block ${styles["login-left"]}`}>
          <h2 className={`main-header`}>Let's Enter to New World</h2>
          <p className={`secondary-text`}>
            is simple a dummy text of the printing typesetting industry. Lorem
            ispusm has been
          </p>
        </div>

        <div className={`col-sm-12 col-md-6 px-md-3 px-lg-5 py-md-3 py-lg-5  ${styles["login-right"]} `}>
          <h3 className={`secondary-header`}>Welcome</h3>
          <p className={`secondary-text`}>
            By continuing you agree to our{" "}
            <span className={"color-primary"}>User Agreement</span> and{" "}
            <span className={"color-primary"}>Privacy policy</span>.
          </p>

          <div className={`${styles["login-form"]}`}>
            <CoopSelect label={"Co-Operative Name"} />

            <CoopInput
              label={"Username"}
              type={"text"}
              placeholder={"Enter your username"}
            />
            <CoopInput
              label={"Password"}
              type={"password"}
              placeholder={"Enter your password"}
            />

            <div className={`${styles["login-bottom"]}`}>
              <CoopCheck label={"Remember my username"} />
              <Link to={"#"} className={`sub-text`}>Forgot Password?</Link>
            </div>

            <CoopButton />
          </div>
        </div>
      </div>
    </>
  );
}
