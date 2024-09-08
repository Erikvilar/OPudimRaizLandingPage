import css from "./NavbarComponent.module.css";
const NavbarComponent = () => {
  return (
    <nav className={css.navBarComponent}>
      <div className={css.NavbarContent}>
        <div>
        <h2>O PUDIM RAIZ</h2>
        <img src="src/images/logo-removebg-preview.png" alt="" />
        </div>
        <ul>
          <li><a href="#about">SOBRE</a></li>
          <li><a href="#produtos">PRODUTOS</a></li>
          <li><a href="#pedido">FAÇA SEU PEDIDO</a></li>
          <li><a href="#about">CONTATOS</a></li>
        </ul>
 
      </div>
    </nav>
  );
};
export default NavbarComponent;
