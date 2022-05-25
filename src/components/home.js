import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react"
import { useState, useContext } from 'react';
import { userContext } from "./userContext";

const Home = () => {


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
  
  
  



  const history = useHistory();
  const images = [
    {
      img: "img/pouring_tea.jpg",
      id: 1
    },
    {
      img: "img/Enjoy.jpg",
      id: 2,
      targetURL: "/black"
    },
    {
      img: "img/fresh_tea_leaves.jpg",
      id: 3  
    },
    {
      img: "img/go-green.png",
      id: 4,
      targetURL: "/products/2"
      
    }
  ];
  return (
    <div className="App">
       <div>
    Home
    <div>{greeting}</div>
    </div>
        <Carousel autoPlay infiniteLoop showArrows={true} showThumbs={false}>
          {images.map((item) => (
            <div key={item.id}
              onClick={() => {
                history.push(item.targetURL);
              }}
              style={{cursor: item.targetURL !== undefined? "pointer" : ""}}
            >
                <div>
                <img src={item.img} alt="carousel image"/>
                </div>
            </div>
          ))}
        </Carousel>
    </div>
  );


}


export default Home;