export interface InputProps {
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  label?: string;
  errorlabel?: string;
  inputValue?: any;
  onChange?: (e: any) => void;
}
