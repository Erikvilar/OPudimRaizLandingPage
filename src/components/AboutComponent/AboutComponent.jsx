import css from './AboutComponent.module.css'
const AboutComponent = () => {
	return (
	
		<section className={css.AboutComponent}>
			<h1>Quem somos</h1>
			<div className={css.AboutContent}>
				<div>
				<h3>O Pudim Raiz</h3>
				<span>Tânia Katia</span>
				<p>Somos o Pudim Raiz, um empreendimento dedicado a trazer o sabor da infância para os dias de hoje. Especializados na produção artesanal de pudins, utilizamos ingredientes de alta qualidade para recriar receitas tradicionais e inovar com novos sabores. Atendemos Uberlândia e região, oferecendo nossas sobremesas como lembranças para eventos e delícias para o dia a dia. Nosso compromisso é com a excelência e o resgate das memórias afetivas através de cada pudim que fazemos.</p>
				</div>
				<div className={css.AboutContentImg}>
				<img src="https://github.com/Erikvilar/OPudimRaizLandingPage/blob/main/src/images/img-circle-tania.jpg?raw=true" alt="" width={110}/>
				</div>
			</div>

		</section>
	);
}
export default AboutComponent;