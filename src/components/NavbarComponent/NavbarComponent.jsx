import css from './NavbarComponent.module.css'
const NavbarComponent = () => {
	return(
		<nav className={css.navBarComponent}>
			<div>
				<ul>
					<li><a href="">HOME</a></li>
					<li><a href=""> SOBRE NÓS </a></li>
					<li><a href=""> PRODUTOS </a></li>
					<li><a href="">FAQ </a></li>
					<li><a href="">CONTATO</a></li>
				</ul>
			</div>

		</nav>
	)
}
export default NavbarComponent;