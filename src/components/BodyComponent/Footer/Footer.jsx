import css from './Footer.module.css'
const Footer = () => {
	return (
	<footer>
			<div className={css.FooterLogo}> 
			<img src="https://github.com/Erikvilar/OPudimRaizLandingPage/blob/erik/src/images/logo-removebg-preview.png?raw=true" alt="" />
			</div>
		<div className={css.FooterContact}>
	
		<ul>
			<li>@OpudimRaiz</li>
			<li>Copyright © 2024 PudinRaiz CNPJ: 43.881.337/0001-68</li>
		</ul>
		</div>
	</footer>
	);
}
export default Footer;