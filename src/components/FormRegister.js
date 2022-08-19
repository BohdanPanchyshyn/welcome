import { useState } from "react";
import "./FormRegister.css";

const FormRegister = (props) => {
   const [focused, setFocused] = useState(false);
   const { label, errorMessage, onChange, ...inputProps } = props;


   const handleFocus = (e) => {
      setFocused(true);
   };
   return (
      <div className="formInput">
         <label>{label}</label>
         <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
         <span>{errorMessage}</span>
      </div>
   )
}

export default FormRegister;