import AboutComponent from "../../AboutComponent/AboutComponent";
import Depoimentos from "../../DepoimentsComponent/Secao_depoimentos";
import FAQ from "../../FAQComponent/Secao_FAQ";
import Secao_Form from "../../FormsComponent/Secao_Form";
import OndeComprar from "../../OrderComponent/Secao_ondeComprar";
import Whatsapp from "../../Whatsapp/Whatsapp";
import VideoPresentationComponent from "../../VideoPresentationComponent/VideoPresentationComponent";
const Main = () => {
  return (
    <main>
      <AboutComponent />
      <VideoPresentationComponent />
      <Whatsapp />
      <OndeComprar />
      <Depoimentos />
      <FAQ />
      <Secao_Form />
    </main>
  );
};
export default Main;
