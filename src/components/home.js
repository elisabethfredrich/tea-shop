import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react"
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "./userContext";

const Home = () => {
  const user = React.useContext(UserContext);  

  const history = useHistory();
  const images = [
    {
      greeting1: "Welcome stranger!",
      greeting2: "Welcome old friend, " + user.userName +" :)",
      img: "img/pouring_tea.jpg",
      id: 1
    },
    {
      greeting1: "",
      greeting2: "",
      img: "img/Enjoy.jpg",
      id: 2,
      targetURL: "/black"
    },
    {
      greeting1: "",
      greeting2: "",
      img: "img/fresh_tea_leaves.jpg",
      id: 3  
    },
    {
      greeting1: "",
      greeting2: "",
      img: "img/go-green.png",
      id: 4,
      targetURL: "/products/2"
      
    }
  ];
  return (
    <div className="App">

        <Carousel autoPlay infiniteLoop showArrows={true} showThumbs={false}>
          {images.map((item) => (
            <div key={item.id}
              onClick={() => {
                history.push(item.targetURL);
              }}
              style={{cursor: item.targetURL !== undefined? "pointer" : ""}}
            >
                <div>
                  <h1 id="carousel-text">{user.userId === undefined || user.userId === "null" || user.userId === "undefined" || user.userId === null ? item.greeting1 : item.greeting2}</h1>
                <img src={item.img} alt="carousel image"/>
                </div>
            </div>
          ))}
        </Carousel>
    </div>
  );


}


export default Home;