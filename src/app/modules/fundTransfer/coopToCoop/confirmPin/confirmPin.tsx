import React from "react";
import { useRef } from "react";
import { useState } from "react";
import CoopButton from "shared/components/form/button/button.component";
import styles from "./confirmPin.module.scss";
import PinInput from "react-pin-input";
import { createRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CoopMpin() {
  const CODE_LENGTH = new Array(6).fill(0);
  const [value, setValue] = useState("");
  const values = value.split("");

  const [focused, setFocused] = useState(false);
  const inputRef = createRef<HTMLInputElement>();
  //   const handleClick = () => {
  //     inputRef.current.focus();
  //   };
  const navigate = useNavigate()
  return (
    <>
      <div className="p-4">
        <p className="fw-600 main-text m-0 pb-1">Confirmation</p>
        <p className="color-primary">Enter your Mpin to proceed your transactions.</p>
        <div className={`d-flex justify-content-between w-100  ${styles["custom-pin"]}`}>
          {/* <div className={`${styles["wrap"]}`} onClick={()=>handleClick}>
          <input
            value=""
            ref={inputRef}
            className={`${styles["wrap-input"]}`}
            style={{
              width: "32px",
              top: "0px",
              bottom: "0px",
              left: "0px",
            }}
          />
          {CODE_LENGTH.map((v, index) => {
            return (
              <div className={`${styles["display"]}`}>{values[index]}</div>
            );
          })}
        </div> */}
          <PinInput
            length={6}
            initialValue=""
            secret
            onChange={(value, index) => {}}
            type="numeric"
            inputMode="number"
            style={{ padding: "10px" }}
            inputStyle={{ borderColor: "gray", borderRadius: "5px" }}
            inputFocusStyle={{ borderColor: "blue" }}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>
        <div className="d-flex p-2 justify-content-center">
          <CoopButton className="mr-3 button-secondary" btnName="Cancel" />
          <CoopButton className="button-comp" btnName="Proceed"  onClick={() => navigate("/coop-to-coop/success")}/>
        </div>
      </div>
    </>
  );
}
