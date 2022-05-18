import React from "react";
import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";

const LoginForm = () =>{
    const initializeValuesOfUser = {firstname: "", lastname: "", email: ""}
    const [formValues, setFormValues] = useState(initializeValuesOfUser);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
 

    const handleChange = (event) =>{
        const {field, value} = event.target
        setFormValues({...formValues, [field]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {}
        const regexNames= /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
        const regexEmail= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.firstname){
            errors.firstname = "First name is required!"
        }
        else if(!regexNames.test(values.firstname)){
            errors.firstname = "This is not a valid first name!"
             }
        if (!values.lastname){
            errors.lastname = "Last name is required!"
        }
        else if(!regexNames.test(values.lastname)){
            errors.lastname = "This is not a valid last name!"
             }
        if (!values.email){
            errors.email = "Email is required!"
        }
        else if(!regexEmail.test(values.email)){
        errors.email = "This is not a valid email!"
         }
        return errors;
    } 

    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors]);

    return(
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
        ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        )}
   
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>First name</label>
                        <input type="text" name="firstname" placeholde ="Firstname" value={formValues.firstname} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.firstname}</p>
                    <div className="field">
                        <label>Last name</label>
                        <input type="text" name="lastname" placeholde ="Lastname" value={formValues.lastname} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.lastname}</p>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholde ="Email" value={formValues.email} onChange={handleChange}/>
                    </div>
                    <p>{formErrors.email}</p>
                <button className="submitbutton">Submit</button>
                <button className="cancelbutton">Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default LoginForm;