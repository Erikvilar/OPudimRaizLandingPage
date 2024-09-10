import css from './ProductsComponent.module.scss'
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import products from '../Data/Products';

const ProductsComponent = () => {
	return (
		<section className={css.ProductsComponent}id="produtos">
			<h1>SABORES DE INFANCIA</h1>
			<div className={css.ProductsContent}>
			<CarouselComponent object={products.products} classType="CarouselProducts" type={false}/>

			</div>
		</section>
	)
}
export default ProductsComponent;