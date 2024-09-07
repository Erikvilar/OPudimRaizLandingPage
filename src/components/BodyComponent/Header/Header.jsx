import CarouselComponent from "../../CarouselComponent/CarouselComponent";
import products from "../../Data/Products";
import HeroComponent from "../../HeroComponent/HeroComponent";
import NavbarComponent from "../../NavbarComponent/NavbarComponent";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
       
      <div className={css.hero}>
        <CarouselComponent type={true} object={products.Background}/>
        <HeroComponent />
      </div>
      <NavbarComponent />
    </header>
  );
};
export default Header;
