import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../stylePages.css";
import FormRegister from "../../components/FormRegister";
import { inputs } from "../../data/data";
import { Link } from 'react-router-dom';


const SignUp = () => {

   const navigate = useNavigate();

   const [values, setValues] = useState({
      username: "",
      lastName: "",
      email: "",
      password: "",
   });


   const handleSubmit = (e) => {
      e.preventDefault();
      const users = JSON.parse(localStorage.getItem("users"));
      const data = !users?.length ? [values] : [...users, values];
      localStorage.setItem("users", JSON.stringify(data));
      navigate("/login");
   }

   const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   }
   return (
      <div className="signUp">
         <form onSubmit={handleSubmit} className="formSignUp">
            <h1 className='h1SignUp'>Sign Up</h1>
            {inputs.map((input) => (
               <FormRegister key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <button type="submit" className='buttonSignUp'>Submit</button>
            <Link to="/login" className='LinkSignUp'>Already have an account? Sign in</Link>
         </form>
      </div>
   );
}

export default SignUp;