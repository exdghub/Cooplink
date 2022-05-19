import { ReactNode } from "react";

export interface PopupProps {
  id?: string;
  className?: string;
  children?: ReactNode;
  ariaLabel?: string; 
  customClass?: string;
}
