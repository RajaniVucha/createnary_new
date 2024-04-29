import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./index.css";
import pic1 from "./image 5.png";
import pic2 from "./hero image.png";

const MyCarousel = (props) => {
  const { img } = props;
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block carouselimg" src={pic1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carouselimg" src={pic2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block carouselimg" src={pic1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
