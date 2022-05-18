import React from 'react'
import styles from "./popup.module.scss";
import { PopupProps } from './popup.types';

export default function Popup(props: PopupProps) {
  const {children, className}= props;  
  return (
      
    <div
        className={`modal fade ${styles["custom-modal"]}`}
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered modal-lg`}>
          <div className={`modal-content ${styles["login-modal-content"]} `}>
            <button
              type="button"
              className={`color-title  ${styles["close-btn"]}`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            {/* <Login /> */}
            {children}
            
          </div>
        </div>
      </div>
  )
}
