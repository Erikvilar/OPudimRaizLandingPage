import products from "../Data/Products";
import NavbarComponent from "../NavbarComponent/NavbarComponent";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import CarouselButton from "../CarouselComponent/CarouselButton";
function Header() {
  return (
    <header>
      <NavbarComponent />
      <CarouselComponent object={products.Background} classType="CarouselHeader" type={true} />
    </header>
  );
}
export default Header;
