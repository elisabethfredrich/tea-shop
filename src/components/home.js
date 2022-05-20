import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const history = useHistory();
  const images = [
    {
      img:
        "/public/img/pouring_tea.jpg",
    },
    {
      img:
        "/public/img/Enjoy.jpg",
    },
    {
      img:
        "/public/img/fresh_tea_leaves.jpg",
    //   targetURL: "..."
    },
    {
      img:
        "/public/img/go green on St. Patrick's.png",
    //   targetURL: "..."
    }
  ];
  return (
    <div className="App">
      <Router>
        <Carousel autoPlay infiniteLoop showArrows={true} showThumbs={false}>
          {images.map((item) => (
            <div
              onClick={() => {
                history.push(item.targetURL);
              }}
            >
                <img src={item.img} alt="image"/>
            </div>
          ))}
        </Carousel>
      </Router>
    </div>
  );
}
export default Home;