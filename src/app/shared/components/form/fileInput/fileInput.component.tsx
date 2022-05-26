import React from 'react'
import { FileInputProps } from './fileInput.types';

export default function CoopFileInput(props: FileInputProps) {
  const { label, type, name, id, placeholder, errorlabel, inputValue, className, onChange } = props;
  return (
    <>
       <div className={`form-group mb-3 ${className}`}>
        <label className="form-label px-2 secondary-text" htmlFor={id}>
          {label}
        </label>
        <input
          type={"file"}
          className="form-control-file secondary-text p-5" 
          id={id}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          onChange={onChange}
        />
        </div>
      
    </>
  )
}
