import HeroComponent from "../../HeroComponent/HeroComponent";
import NavbarComponent from "../../NavbarComponent/NavbarComponent";
import css from "./Header.module.css"
const Header = () => {
  return (
    <header className={css.header}>
      <NavbarComponent />
      <HeroComponent/>

    </header>
  );
};
export default Header;
