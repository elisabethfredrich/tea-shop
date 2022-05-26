import React from "react";
import { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Register = () =>{
    const [formValueslogin, setFormValueslogin] = useState("");
    const [formErrorslogin, setFormErrorslogin] = useState({});
    const [isLoginSubmit, setLoginIsSubmit] = useState(false); 
  /*   const [apiResponse, setState] = useState([]); */
  const [user, setUser] = useState({});

    const handleLoginChange = (e) =>{
         const { name, value } = e.target;
         setFormValueslogin({ ...formValueslogin, [name]: value });
      }


/* 
     const callAPI = () => {
         console.log("test")
         let Email = formValueslogin.email;
        console.log("email:"+Email);
       

        fetch(`http://localhost:9000/customers/${Email}`, {
            method: "GET",
            headers: {"Content-Type": "application/json", 'Accept': 'application/json'},
            mode: 'cors'
          })
            .then(res => res.json())
            .then(res => setState(res));
            console.log(setState);
            setLoginIsSubmit(false);
     }  */
  

    const callAPI = () =>{
        let customerEmail = formValueslogin.email;
        console.log(customerEmail)
      /*   let customerEmail= {customeremail}  */
        
        fetch(`http://localhost:9000/customers/${customerEmail}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
          })
            .then(res => res.json()).then(res => setUser(res));
    } 

/* 
     useEffect(() =>{
        callAPI();
        },[])

    useEffect(()=>{
        setUser(apiResponse);
        },[apiResponse]) */

    

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

      function login(){
        history.push("/login");
      }
  

return (
<div className="container">
<form onSubmit={HandleSubmitLogin2}>
<h1>Login here:</h1>
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
{/* <h4 className="product-title">{user.productName}</h4> */}
<Button onClick={HandleSubmitLogin2}>Login in</Button>
<Button onClick={login}>Register here</Button>
</form>
</div>
);

}

export default Register;


