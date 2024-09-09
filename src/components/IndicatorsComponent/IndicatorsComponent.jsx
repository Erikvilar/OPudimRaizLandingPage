import css from "./IndicatorsComponent.module.scss";
import CountUp from "react-countup";
const IndicatorsComponent = () => {
  return (
    <section className={css.IndicatorsComponent}>
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
		  <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -900 960 960" width="50px" fill="#000000"><path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/></svg>
		 
		  </span>
          <p>Avaliação media</p>
        </div>
      </div>
    </section>
  );
};
export default IndicatorsComponent;
