import React from 'react'
import styles from "./popup.module.scss";
import { PopupProps } from './popup.types';

export default function Popup(props: PopupProps) {
  const {children, className, id, ariaLabel, customClass}= props;  
  return (
      
    <div
        className={`modal fade ${styles["custom-modal"]}`}
        id={`${id}`}
        tabIndex={-1}
        aria-labelledby={`${ariaLabel}`}
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered ${customClass}`}>
          <div className={`modal-content ${styles["custom-modal-content"]} `}>
            <button
              type="button"
              className={`btn-close ${styles["close-btn"]}`}
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
