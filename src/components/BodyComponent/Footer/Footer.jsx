import css from './Footer.module.css'
const Footer = () => {
	return (
	<footer>
		<div className={css.FooterLogo}> 
			<img src="../src/images/logo.png" alt="" /></div>
		<div className={css.FooterContact}>
		<ul>
			<li>@OpudimRaiz</li>
			<li>Copyright © 2024 PudinRaiz CNPJ: 50.058.456/0001-80</li>
		</ul>
		</div>
	</footer>
	);
}
export default Footer;