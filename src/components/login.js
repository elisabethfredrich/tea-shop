import React from "react";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const LoginForm = () =>{

      const Button = styled.button`
  
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 12px 16px;
        background-color: #f1f1f1;
        cursor: pointer;
        margin: 0.2rem;
        color: black;
      /* Add a light grey background on mouse-over */
      :hover{
        background-color: #ddd;
      }
      /* Add a dark background to the active button */
      active {
        background-color: #666;
        color: white;
      }
      `;
   
    const initialValues = { firstName: "", lastName: "", email: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
   
  
    const HandleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
  
    
       fetch(`http://localhost:9000/customers`,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formValues)
      }).then(()=>{
        console.log('new customer added')
        setIsSubmit(false);
      })
    
   
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);

    const validate = (values) => {
      const errors = {};
      const regexNames = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.firstName) {
        errors.firstName = "First name is required!";
      }else if (!regexNames.test(values.firstName)){
          errors.firstName ="This is not a valid name";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regexEmail.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.lastName) {
        errors.lastName = "Last name is required";
      } else if (!regexNames.test(values.lastName)){
        errors.lastName = "This is not a valid name!";
      }  
      return errors; 
    };
    }  
    
    
    const history = useHistory();
    function registered(){
      alert("Registration successfull!");
    }
    
    return (
      <div className="container">
    
        <form onSubmit={HandleSubmit}>
          <h1>Registration</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>First name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.firstName}</p>
            <div className="field">
              <label>Last name:</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.lastName}</p>
            <div className="field">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            {!isSubmit && <Button onClick={registered}>Submit</Button>}
            {isSubmit && <Button disabled>adding registration...</Button>}
            <Button onClick={history.goBack}>Cancel</Button>
            
          </div>
        </form>
      </div>
    );
  }
export default LoginForm;
