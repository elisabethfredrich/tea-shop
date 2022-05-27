import React from "react";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "./userContext";
import { useHistory } from "react-router-dom";

const Register = () =>{   

  const history = useHistory();
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(""); 
  const [isSubmit, setIsSubmit] = useState(false); 
  let [errorMessage,setErrorMessage] = useState("")

  let customerId = Math.floor(Math.random() * 1000+1) 
  
  const { setUserId, setUserName } = useContext(UserContext);
  const {userId, userName} = useContext(UserContext);

  const initialState = {customerId:userId,customerName:userName}
  const [user,setUser] = useState(initialState);


  const handleLogin = () => {
    setUserId(user.customerId);
    setUserName(user.customerName);
  }

  useEffect(()=>{
    handleLogin();
  },[user])

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    let customerName = formValues.firstName +" "+ formValues.lastName;
    let customerEmail = formValues.email
    let data = {customerId, customerName, customerEmail}


    fetch(`http://localhost:9000/customers`,{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    .then((res)=>{ //does not work for login if you are already registered
      if(res.status >= 400) {
        setErrorMessage("User is already registered. Please type in something else.")
        throw new Error("Server responds with error!")
      }
      setUser({customerId,customerName})
      console.log('New customer was successfully created: ', JSON.stringify(formValues))
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

      fetch(`http://localhost:9000/baskets`,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(basket)
      })
      .then((res)=>{
        console.log("Basket was successfully created")
      })
    }
  
    function goToHome(){
      history.push("/");
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
    
        <form onSubmit={handleSubmit}>
          <h1 className="headline">Registration</h1>
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
            {!isSubmit && <button className="btn" >Submit</button>}
            {<p>{errorMessage}</p>}
            
          </div>
        </form>
            <button className="btn" onClick={goToHome}>Cancel</button>
            
      </div>
    );
  }
export default Register;
