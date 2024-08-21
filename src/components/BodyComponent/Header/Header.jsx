import CarouselComponent from "../../CarouselComponent/CarouselComponent";
import HeroComponent from "../../HeroComponent/HeroComponent";
import NavbarComponent from "../../NavbarComponent/NavbarComponent";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.hero}>
        <CarouselComponent />

        <HeroComponent />
      </div>
      <NavbarComponent />
    </header>
  );
};
export default Header;
