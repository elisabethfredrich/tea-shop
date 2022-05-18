import React from "react";
import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";

const Form = () => {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");

const onChangeFirstName = (e)=>{
    const {firstName, value} = e.target
    setFirstName({[firstName]: value})
}

const onChangeLastName = (e)=>{
    const {lastName, value} = e.target
    setLastName({[lastName]: value})
}

const onChangeEmail = (e)=>{
    const {email, value} = e.target
    setEmail({[email]: value})
}

const onSubmit = (e) =>{
    alert(`Save first name: ${firstName}, last name: ${lastName}, email: ${email}`)
}

return(
    <div>
    <form onSubmit={onSubmit}>
        <h1>Login Form</h1>
        <label>First Name:</label>
        <input id="fieldFirstName" type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
        <label>Last Name:</label>
        <input id="fieldLastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
        <label>Email:</label>
        <input id="fieldEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
    <button type="submit">Save</button>
    </form>
    </div>
)

};



export default Form;