import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../stylePages.css";
import FormSignIn from '../../components/FormSignIn';
import { dataSignIn } from '../../data/dataSignIn';

const SignIn = () => {

   const navigate = useNavigate();

   const [values, setValues] = useState({
      email: "",
      password: "",
   });

   const [rememberUser, setRememberUser] = useState(false);

   const users = JSON.parse(localStorage.getItem("users"));
   const savedUser = JSON.parse(localStorage.getItem("savedUser"));


   const searchLoginUser = users?.some(el => el.email === values.email && el.password === values.password);



   const handleSubmit = (e) => {
      e.preventDefault();
      const login = users?.some(el => el.email === values.email);
      const password = users?.some(el => el.password === values.password);
      if (!login) alert("User does not exist.");
      else if (!password) alert("Incorect password.");
      else if (login && password && rememberUser) localStorage.setItem("savedUser", JSON.stringify(values), navigate("/succesfull"));
      else if (login && password) navigate("/succesfull");
   }

   useEffect(() => {
      if (savedUser) {
         setValues(savedUser);
      }
   }, []);


   const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   }
   return (
      <div className="signIn">
         <form onSubmit={handleSubmit} className="formSignIn">
            <h1 className='h1SignIn'>Sign In</h1>
            {dataSignIn.map((input) => (
               <FormSignIn key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <div className='blockCheckSignIn'>
               <input type="checkbox" onChange={() => setRememberUser(!rememberUser)} defaultChecked={rememberUser} />
               <p className='rememberMeSignIn'>Remember me</p>
            </div>
            <button type="submit" className='buttonSignIn'>Submit</button>
            <Link to="/register" className='LinkSignIn'>Don't have an account? Sign Up</Link>
         </form>
      </div>
   );
}

export default SignIn;