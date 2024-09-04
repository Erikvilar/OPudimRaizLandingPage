import Carousel from "react-bootstrap/Carousel";
import css from "./CarouselComponent.module.css";
import products from "../Data/Products";

function CarouselComponent ({type, object}) {
  return (
  <Carousel className={css.Carousel} fade={type}  >
    {object.map((n, index) => (
      <Carousel.Item className={css.CarouselItem} key={index}>
        <div>
          <img src={n.img} alt="" />    
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
)};
export default CarouselComponent;
