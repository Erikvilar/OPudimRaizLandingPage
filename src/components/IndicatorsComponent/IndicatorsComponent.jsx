import css from "./IndicatorsComponent.module.scss";
import CountUp from "react-countup";
import Aos from "aos";
const IndicatorsComponent = () => {
  return (
    <section className={css.IndicatorsComponent} data-aos="zoom-in" data-aos-delay="600">
      <div className={css.Indicators}>
        <div>
			<span>
         + <CountUp end={500} duration={4} delay={2}/>
		  </span>
          <p>Unidades Vendidas</p>
        </div>
        <div>
			<span>
          +<CountUp end={100} duration={4} delay={2} />
		  </span>
          <p>Clientes Satisfeitos</p>
        </div>
        <div>
          <CountUp end={10} duration={4} delay={2} />
          <p>Sabores</p>
        </div>
        <div>
			<span>
				
          <CountUp end={5} duration={4} delay={2} />
	
		 
		  </span>
          <p>Avaliação Ifood</p>
        </div>
      </div>
    </section>
  );
};
export default IndicatorsComponent;
