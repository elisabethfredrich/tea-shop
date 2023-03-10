import React from "react"
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useContext } from 'react';
import { UserContext } from "./userContext";

const Home = () => {
  const user = useContext(UserContext);  
  const history = useHistory();

  const images = [
    {
      greeting1: "Welcome stranger!",
      greeting2: "Welcome old friend, " + (user.userId === undefined ? "" : user.userName.split(" ")[0]) +" :)",
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
    <div>
        <Carousel autoPlay infiniteLoop showArrows={true} showThumbs={false}>
          {images.map((item) => (
            <div key={item.id}
              onClick={() => {
                history.push(item.targetURL);
              }}
              style={{cursor: item.targetURL !== undefined? "pointer" : ""}}
            >
                <div>
                  <h1 id="carousel-text">{user.userId === undefined ? item.greeting1 : item.greeting2}</h1>
                <img src={item.img} alt="carousel image"/>
                </div>
            </div>
          ))}
        </Carousel>
    </div>
  );
}


export default Home;