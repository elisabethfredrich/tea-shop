import React from "react"
import { useState, useContext } from 'react';
import { userContext } from "./userContext";



const Home = () =>{

const msg = useContext(userContext); 

const [isSubmit, setIsSubmit, formValues, setFormValues] = useContext(userContext); 
/* const [isSubmit, setIsSubmit] = useState(false);
const [formValues, setFormValues] = useState(" ");
 */


const userName = () =>{
    return formValues.firstName
  } 


let userGreeting = () =>{
    return <h1>Welcome to the world of ITEa!</h1>
}; 

let guestGreeting = () =>{
    return <h1>Hello </h1>
}

let greeting = (isSubmit) =>{
    if (isSubmit){
        return userGreeting
    }
    else{
        return guestGreeting
    }
}; 

return(
    <div>
    Home
    <div>{greeting}</div>
    </div>
    );
}

export default Home;