import AboutComponent from "../../AboutComponent/AboutComponent";
import Depoimentos from "../../DepoimentsComponent/Secao_depoimentos";
import FAQ from "../../FAQComponent/Secao_FAQ";
import Secao_Form from "../../FormsComponent/Secao_Form";
import IndicatorsComponent from "../../IndicatorsComponent/IndicatorsComponent";
import OndeComprar from "../../OrderComponent/Secao_ondeComprar";
import ProductsComponent from "../../ProductsComponent/ProductsComponent";
import css from "./main.module.css";

const Main = () => {
  return (
    <main className={css.mainComponent}>
      <AboutComponent />

      <ProductsComponent />

      <OndeComprar />
      <IndicatorsComponent />
      <FAQ />
    </main>
  );
};
export default Main;
