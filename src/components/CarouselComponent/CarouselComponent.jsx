import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./CarouselComponent.module.css"
const CarouselComponent = () => {
	return (
		<Carousel fade className={css.Carousel}>
		  <Carousel.Item className={css.CarouselItem} >
			<img src="https://github.com/Erikvilar/OPudimRaizLandingPage/blob/main/src/images/pudim7.jpeg?raw=true"/>
		  </Carousel.Item>
		  <Carousel.Item className={css.CarouselItem} >
			<img src="https://github.com/Erikvilar/OPudimRaizLandingPage/blob/main/src/images/pudim5.jpeg?raw=true"/>
		  </Carousel.Item>
		  <Carousel.Item className={css.CarouselItem} >
			<img src="https://github.com/Erikvilar/OPudimRaizLandingPage/blob/main/src/images/pudim1.jpeg?raw=true"/>
		  </Carousel.Item>
		  <Carousel.Item className={css.CarouselItem} >
			<img src="https://github.com/Erikvilar/OPudimRaizLandingPage/blob/main/src/images/pudim3.jpeg?raw=true"/>
		  </Carousel.Item>
		  
		
		</Carousel>
	  );
}
export default CarouselComponent;