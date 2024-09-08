import products from "./Data/Products";
import NavbarComponent from "./NavbarComponent/NavbarComponent";
import CarouselComponent from "./CarouselComponent/CarouselComponent";
function Header() {
  return (
    <header>
      <CarouselComponent object={products.Background} type={true} />
      <NavbarComponent />
    </header>
  );
}
export default Header;
