import React from "react";
import { useState, useEffect, useContext } from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { UserContext } from "./userContext";

const Login = () =>{

    const [formValueslogin, setFormValueslogin] = useState("");
    const [formErrorslogin, setFormErrorslogin] = useState({});
    const [isLoginSubmit, setLoginIsSubmit] = useState(false); 


  const user = useContext(UserContext);

    const handleLoginChange = (e) =>{
         const { name, value } = e.target;
         setFormValueslogin({ ...formValueslogin, [name]: value });
      }
      const handleLogout = () => {
        user.setUserId(undefined);
        user.setUserName(undefined);
      }
      

    const callAPI = () =>{
        let customerEmail = formValueslogin.email;
        
        fetch(`http://localhost:9000/customers/email/${customerEmail}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
          })
            .then(res => res.json()).then(res => {
              user.setUserId(res.customerId);
              user.setUserName(res.customerName);
              history.push("/");    
            }
              );
    } 

    const validate = (values) => {
        const errors = {};
        const regexNames = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullName) {
          errors.firstName = "First name is required!";
        }else if (!regexNames.test(values.fullName)){
            errors.firstName ="This is not a valid name";
        }if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regexEmail.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        return errors; 
      };
   
      useEffect(() => {
        console.log(formErrorslogin);
        if (Object.keys(formErrorslogin).length === 0 && isLoginSubmit) {
          console.log(formValueslogin);
        }
      }, [formErrorslogin]);
    
      const history = useHistory();

    

      const HandleSubmitLogin2 = (e) => {
        e.preventDefault();
        setFormErrorslogin(validate(formValueslogin));
        setLoginIsSubmit(true);
        callAPI();
      }

      function goToRegister(){
        history.push("/register");
      }
  

return (
<div className="container">
<form onSubmit={HandleSubmitLogin2}>
<h1 className="headline">Login here</h1>
<div className="ui divider"></div>
<div className="ui form"></div>
<div className="field">
  <label>Full name:</label>
  <input
    type="text"
    name="fullName"
    placeholder="Full name"
    value={formValueslogin.fullName}
    onChange={handleLoginChange}
  />
</div>
<p>{formErrorslogin.fullName}</p>
<div className="field">
  <label>Email:</label>
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formValueslogin.email}
    onChange={handleLoginChange}
  />
</div>
<p>{formErrorslogin.email}</p>
<button className="btn" onClick={HandleSubmitLogin2}>Log in</button>
</form>
<button className="btn" onClick={handleLogout}>Log out</button>
<button className="btn" onClick={goToRegister}>Register here</button>
</div>
);

}

export default Login;