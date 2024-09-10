import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas"; // Importar o componente Offcanvas diretamente
import css from "./NavbarComponent.module.css";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <nav className={css.navBarComponent}>
      <div className={css.NavbarContent}>
        <div className={css.TitleAlign}>
        <img src="src/images/logo-removebg-preview.png" alt="Logo" />
          <h2>O PUDIM RAIZ</h2>
    
        </div>
        <ul className={css.NavbarLinks}>
          <li>
            <a href="#about" >
              SOBRE
            </a>
          </li>
          <li>
            <a href="#produtos" >
              PRODUTOS
            </a>
          </li>
          <li>
            <a href="#pedido">
              FAÇA SEU PEDIDO
            </a>
          </li>
          <li>
            <a href="#contatos">
              CONTATOS
            </a>
          </li>
        </ul>
        <button className={css.menuToggle} onClick={handleShow}>
          ☰
        </button>
        <Offcanvas show={show} onHide={handleClose} style={{ width: "300px" }}>
          <Offcanvas.Header closeButton className={css.offcanvasHeader}>
            <Offcanvas.Title className={css.offcanvasTitle}>
              <div className={css.TitleAlign}>
                <h2>Menu</h2>
                <img src="src/images/logo-removebg-preview.png" alt="Logo" />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={css.offcanvasBody}>
            <ul className={css.menuOffCanvas} >
            <li><a href="#about" onClick={handleClose}>SOBRE</a></li>
          <li><a href="#produtos" onClick={handleClose}>PRODUTOS</a></li>
          <li><a href="#pedido" onClick={handleClose}>FAÇA SEU PEDIDO</a></li>
          <li><a href="#contatos" onClick={handleClose}>CONTATOS</a></li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default NavbarComponent;
