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

    <h1>{user.userId === undefined ? "Welcome stranger!" : "Welcome old friend, " + user.userName +" :)"}</h1>
    
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