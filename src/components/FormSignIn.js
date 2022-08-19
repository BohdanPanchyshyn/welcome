import { useState } from "react";
import "./FormRegister.css";

const FormSignIn = (props) => {
   const [focused, setFocused] = useState(false);
   const { label, onChange, ...inputProps } = props;


   const handleFocus = (e) => {
      setFocused(true);
   };
   return (
      <div className="formInput">
         <label>{label}</label>
         <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
      </div>
   )
}

export default FormSignIn;