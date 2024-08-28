import css from './AboutComponent.module.css'
const AboutComponent = () => {
	return (
	
		<section className={css.AboutComponent}>
			<h1>Veja nossos sabores</h1>
			<div className={css.AboutContent}>
				<div>
				<h3>Pudim tradicional</h3>
				<p>O pudim tradicional sem duvidas e o mais querido, por sua textura já conhecida e o sabor tradicional, desperta a vontade em todos nos de querer mais um pedaço.</p>
				</div>
				<div className={css.AboutContentImg}>
				<img src="../src/images/pudimTradicionalSobre.jpeg" alt="" width={110}/>
				</div>
			</div>

		</section>
	);
}
export default AboutComponent;