import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
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
      targetURL: "/products/2",
      id: 4
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
              style={{cursor: "pointer"}}
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