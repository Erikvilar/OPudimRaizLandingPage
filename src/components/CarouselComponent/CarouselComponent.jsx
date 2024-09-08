import Carousel from "react-bootstrap/Carousel";
import css from "./CarouselComponent.module.css";

function CarouselComponent ({type, object}) {
  return (
  <Carousel className={css.Carousel} fade={type}  >
    {object.map((n, index) => (
      <Carousel.Item className={css.CarouselItem} key={index}>
             
        <div>
    
          <img src={n.img} alt="" />    
          
        </div>
        <div className={css.hero}>
        <h2>Expêriencia doce e verdadeira tradicionalidade o pudim raiz</h2>
        <p>{n.text}</p>
        <button>Veja mais</button>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
)};
export default CarouselComponent;
