import React from "react";
import Carousel from "react-bootstrap/Carousel";
import css from "./CarouselComponent.module.css";

const  CarouselComponent  = ({type, object}) =>{
 return (
  <Carousel fade    >
    {object.map((n, index) => (
      <Carousel.Item className={css.CarouselItem} key={index}>
        <div>
          <img src={n.img} alt="" />    
          
        </div>
        <p>{n.text}</p>
      </Carousel.Item>
    ))}
  </Carousel>
)};
export default CarouselComponent;
