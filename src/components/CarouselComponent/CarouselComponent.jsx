import Carousel from "react-bootstrap/Carousel";

import css from "./CarouselComponent.module.css";
import products from "../Data/Products";

const CarouselComponent = ({object , classType}) => {
  return (
    <Carousel fade={false}  className={classType}>




      {object == products.PrimaryContent ? object.map((n, index) =>(
        <Carousel.Item className={css.CarouselItem} key={index}>
          <div className="ProductBox" >
            <img src={n.img} alt="" />
            <h3>{n.name}</h3>
            <p>{n.desc}</p>
          </div>
        </Carousel.Item>
      )):(
       products.Background.map((item,index )=>(
        <Carousel.Item className={css.CarouselItem} key={index}>
        <div>
          <img src={item.img} alt="" />
        </div>
        </Carousel.Item>
       ))
      )}

    </Carousel>
  );
};
export default CarouselComponent;
