import CarouselComponent from "../CarouselComponent/CarouselComponent";
import products from "../Data/Products";
import css from "./CarouselProducts.module.css";
const CarouselProducts = () => {
  return (
    <section className={css.CarouselProducts}>
      <div>
        <h1>Nossos produtos</h1>
        <span>Experimente outros sabores </span>
	
        <CarouselComponent classType="CarouselVendor" object={products.PrimaryContent} />

      </div>
    </section>
  );
};
export default CarouselProducts;
