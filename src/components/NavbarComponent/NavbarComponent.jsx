import { useState } from 'react';
import css from './NavbarComponent.module.css'
const NavbarComponent = () => {
	const [background, setBackground] = useState("#000000")
	return(
		<nav className={css.navBarComponent}>
			<div>
				<ul>
					<li onMouseOver={() => setBackground("#dc6504")} onMouseLeave={()=> setBackground("#000000")}>
						<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill={background}><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
					<button>Contatos</button>
					<button>Produtos</button>
					
					
					{/* <li><a href="">HOME</a></li>
					<li><a href=""> SOBRE NÓS </a></li>
					<li><a href=""> PRODUTOS </a></li>
					<li><a href="">FAQ </a></li>
					<li><a href="">CONTATO</a></li> */}
				</ul>
			</div>

		</nav>
	)
}
export default NavbarComponent;