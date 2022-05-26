import React from "react";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "./userContext";
import { useHistory } from "react-router-dom";
// import { Button } from "react-bootstrap";
import styled from "styled-components";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { v4 as uuid } from 'uuid';

const LoginForm = ({setUser}) =>{

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
   





/* 
    const [formValues, setFormValues, isSubmit, setIsSubmit]  = useContext(userContext); */
    //const initialValues = { firstName: "", lastName: "", email: "" };
/* 
  const [isSubmit, setIsSubmit, formValues, setFormValues] = useContext(userContext); 
  */
    const [formErrors, setFormErrors] = useState({});
    const [formValues, setFormValues] = useState(""); 
    const [isSubmit, setIsSubmit] = useState(false); 

  /*   const unique_id = uuid();
    const small_id = unique_id.slice(0,8)
    const customerId = {small_id} */

 /* TEST */  
const basketTest = {"customerId":1,"customerName":"Sofie Nielsen","customerEmail":"soni@itu.dk"}
let customerBasket = {customerId: 1, products:[]};

  let customerId = Math.floor(Math.random() * 1000+1)
  
 
  

/* let newCustomer = {customerId, ...formValues}  */
/* let newCustomer = {customerId: 7, customerName: "Jane Doe", customerEmail: "janedoe@hotmail.com"}; */

const { setUserId, setUserName } = useContext(UserContext);
const {userId, userName} = useContext(UserContext);

const initialState = {customerId:userId,customerName:userName}
const [userTest,setUserTest] = useState(initialState);

// const [id,setId] = useState(userId)
// const [name,setName] = useState(userName)


const handleLogin = () => {
  // console.log("test:"+userTest.customerId + " " + userTest.customerName);
  setUserId(userTest.customerId);
  setUserName(userTest.customerName);
}

const handleLogout = () => {
  setUserId(undefined);
  setUserName(undefined);
}

useEffect(()=>{
  handleLogin();
  console.log('User was updated')
},[userTest])


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
    
    // console.log("something happened")
    console.log('new customer added', JSON.stringify(formValues))
    setUserTest({customerId,customerName})
    // console.log("Customer id: "+data.customerId)
    // setIsSubmit(false);

    // //setUserId(data.customerId)

    // updateUser(data.customerId)
    createBasket(customerId)

  })
  
}

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
   
  
    // const HandleSubmit = (e) => {
    //   e.preventDefault();
    //   setFormErrors(validate(formValues));
    //   setIsSubmit(true);
    //   let data = {customerId, ...formValues} 
   

    
    //   fetch(`http://localhost:9000/customers`,{
    //     method: 'POST',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(data)
    //   })
    //   .then((res)=>{ //does not work for login if you are already registered
    //     if(res.status >= 400) {throw new Error("Server responds with error!")}

    //     console.log('new customer added', JSON.stringify(formValues))
    //     console.log("Customer id: "+data.customerId)
    //     setIsSubmit(false);

    //     //setUserId(data.customerId)

    //     updateUser(data.customerId)
    //     createBasket(data.customerId)

    //   })

    //   /* 
    //   fetch(`http://localhost:9000/baskets`,{
    //     method: 'POST',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(customerBasket)
    //   }).then(()=>{
    //     console.log('basket created')
    //   }) */
      
      
    // }
    
    const updateUser = (userId) => {
      fetch(`http://localhost:9000/customers/${userId}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        mode: 'cors'
      })
        .then(res => res.json())
        .then(res => setUser(res));
      ;
    }

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
    
    
    const history = useHistory();


    function register(){
      //alert("Registration successfull!");
      //history.push("/")
    }
    
    function logout(){
      setUser(undefined);
      history.push("/")
    }
    
 

    return (
      <div className="container">

        <Button onClick={handleLogin}>Log ind</Button>
        <Button onClick={handleLogout}>Log ud</Button>
    
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
            {!isSubmit && <Button onClick={register}>Submit</Button>}
            {isSubmit && <Button disabled>adding registration...</Button>}
            <Button onClick={history.goBack}>Cancel</Button>
            <Button onClick={logout}>Log out</Button>
            
            
          </div>
        </form>
      </div>
    );
  }
export default LoginForm;
