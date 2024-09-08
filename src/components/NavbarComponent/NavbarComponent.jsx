import css from "./NavbarComponent.module.css";
const NavbarComponent = () => {
  return (
    <nav className={css.navBarComponent}>
      <div>
        <h2>O Pudim Raiz</h2>
        <ul>
          <li><a href="#about">about</a></li>
          <li>Faq</li>
          <li>Sobre nos</li>
        </ul>
        <button>Contatos</button>
        <button>Produtos</button>
      </div>
    </nav>
  );
};
export default NavbarComponent;
