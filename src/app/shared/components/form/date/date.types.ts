export interface DateProps{
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  label?: string;
  errorlabel?: string;
  inputValue?: any;
  onChange?: (e: any) => void;
  className?: string;
  hasToggle?: boolean;
  toggleValues: ["AD" | "BS", "AD" | "BS"];
}