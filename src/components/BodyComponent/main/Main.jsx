
import AboutComponent from '../../AboutComponent/AboutComponent';
import CarouselProducts from '../../CarouselProducts/CarouselProducts';
import Depoimentos from '../../Secao_Depoimentos/Secao_depoimentos';
import FAQ from '../../Secao_FAQ/Secao_FAQ';
import Secao_Form from '../../Secao_Form/Secao_Form';
import OndeComprar from '../../Secao_OndeComprar/Secao_ondeComprar';

const Main = () => {
	return (
		<main>
		<AboutComponent/>
		<CarouselProducts/>
		<OndeComprar/>
		<Depoimentos/>
		<FAQ/>
		<Secao_Form/>
		</main>

	);
}
export default Main;