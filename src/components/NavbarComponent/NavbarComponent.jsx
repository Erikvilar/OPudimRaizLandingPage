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
        <img src="https://github.com/Erikvilar/OPudimRaizLandingPage/blob/erik/src/images/logo-removebg-preview.png?raw=true" alt="Logo" />
        <a href="#">  <h2>O PUDIM RAIZ</h2></a>

    
        </div>
        <ul className={css.NavbarLinks}>
          <li>
            <a href="#sobre" >
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
            <a href="#FAQ">
              FAQ
            </a>
          </li>
          <li>
            <a href="#formSection">
              CONTATE-NOS
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
                <img src="https://github.com/Erikvilar/OPudimRaizLandingPage/blob/erik/src/images/logo-removebg-preview.png?raw=true" alt="Logo" />
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={css.offcanvasBody}>
            <ul className={css.menuOffCanvas} >
            <li><a href="#sobre" onClick={handleClose}>SOBRE</a></li>
          <li><a href="#produtos" onClick={handleClose}>PRODUTOS</a></li>
          <li><a href="#pedido" onClick={handleClose}>FAÇA SEU PEDIDO</a></li>
          <li><a href="#FAQ" onClick={handleClose}>FAQ</a></li>
          <li><a href="#formSection" onClick={handleClose}>CONTATE-NOS</a></li>
       
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default NavbarComponent;
