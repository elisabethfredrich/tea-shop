import React from "react";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "./userContext";
import { useHistory } from "react-router-dom";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { v4 as uuid } from 'uuid';

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
   

  const history = useHistory();
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(""); 
  const [isSubmit, setIsSubmit] = useState(false); 

let customerId = Math.floor(Math.random() * 1000+1)
  
const { setUserId, setUserName } = useContext(UserContext);
const {userId, userName} = useContext(UserContext);

const initialState = {customerId:userId,customerName:userName}
const [user,setUser] = useState(initialState);


const handleLogin = () => {
  setUserId(user.customerId);
  setUserName(user.customerName);
}

const handleLogout = () => {
  setUserId(undefined);
  setUserName(undefined);
}

useEffect(()=>{
  handleLogin();
  console.log('User was updated')
},[user])


const handleSubmit2 = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
  let customerName = formValues.firstName +" "+ formValues.lastName;
  let data = {customerId, ...formValues} 

  fetch(`http://localhost:9000/customers`,{
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  })
  .then((res)=>{ //does not work for login if you are already registered
    if(res.status >= 400) {throw new Error("Server responds with error!")}
    console.log('new customer added', JSON.stringify(formValues))
    setUser({customerId,customerName})
    setIsSubmit(false);
    createBasket(customerId)

  })
  
}

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
    

    const createBasket = (userId) => {
      const basket = {customerId: userId, products:[]}
      console.log(JSON.stringify(basket))

      fetch(`http://localhost:9000/baskets`,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(basket)
      })
      .then((res)=>{ //does not work for login if you are already registered
        console.log(res)
        console.log("Basket was created")
      })
    }
  
   
   
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
  
 

    return (
      <div className="container">
    
        <form onSubmit={handleSubmit2}>
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
            {!isSubmit && <Button >Submit</Button>}
            {isSubmit && <Button disabled>adding registration...</Button>}
            
          </div>
        </form>
            <Button onClick={history.goBack}>Cancel</Button>
            <Button onClick={handleLogout}>Log out</Button>
            
      </div>
    );
  }
export default LoginForm;
