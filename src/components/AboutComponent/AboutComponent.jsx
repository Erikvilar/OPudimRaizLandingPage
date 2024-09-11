import CarouselButton from "../CarouselComponent/CarouselButton";
import css from "./AboutComponent.module.css";
const AboutComponent = () => {
  return (
    <section className={css.AboutComponent} id="sobre">
      <h1>QUEM SOMOS</h1>
      <hr />
      <div className={css.AboutContent}>
        <div className={css.About}>
          <div className={css.AboutPersonBox}>
            <img
              className={css.person}
              src="https://github.com/Erikvilar/OPudimRaizLandingPage/blob/main/src/images/img-circle-tania.jpg?raw=true"
              alt=""
            />
            <span>Tânia Katya</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#DA954B"
            >
              <path d="M226-262q59-42.33 121.33-65.5 62.34-23.17 132.67-23.17 70.33 0 133 23.17T734.67-262q41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM480.31-80q-82.64 0-155.64-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.51T80-480.18q0-82.82 31.5-155.49 31.5-72.66 85.83-127Q251.67-817 324.51-848.5T480.18-880q82.82 0 155.49 31.5 72.66 31.5 127 85.83Q817-708.33 848.5-635.65 880-562.96 880-480.31q0 82.64-31.5 155.64-31.5 73-85.83 127.34Q708.33-143 635.65-111.5 562.96-80 480.31-80Zm-.31-66.67q54.33 0 105-15.83t97.67-52.17q-47-33.66-98-51.5Q533.67-284 480-284t-104.67 17.83q-51 17.84-98 51.5 47 36.34 97.67 52.17 50.67 15.83 105 15.83Zm0-366.66q31.33 0 51.33-20t20-51.34q0-31.33-20-51.33T480-656q-31.33 0-51.33 20t-20 51.33q0 31.34 20 51.34 20 20 51.33 20Zm0-71.34Zm0 369.34Z" />
            </svg>
          </div>
          <p>
            Somos o Pudim Raiz, um empreendimento dedicado a trazer o sabor da
            infância para os dias de hoje. Especializados na produção artesanal
            de pudins, utilizamos ingredientes de alta qualidade para recriar
            receitas tradicionais e inovar com novos sabores. Atendemos
            Uberlândia e região, oferecendo nossas sobremesas como lembranças
            para eventos e delícias para o dia a dia. Nosso compromisso é com a
            excelência e o resgate das memórias afetivas através de cada pudim
            que fazemos.
          </p>
          <div>
            <h3>Galeria</h3>
          </div>
        </div>

        <div className={css.AboutImages}>

          <img data-aos="fade-up" data-aos-delay="100" src="src/images/pudim8.jpg" alt="" />
          <img   data-aos="fade-up" data-aos-delay="200" src="src/images/pudim3.jpg" alt="" />
          <img  data-aos="fade-up" data-aos-delay="300"src="src/images/pudimPote2.jpg" alt="" />
          <img data-aos="fade-up" data-aos-delay="400" src="src/images/pudimPote1jpg.jpg" alt="" />
          <img  data-aos="fade-up" data-aos-delay="500"src="src/images/pudimVermelho2.jpeg" alt="" />
          <img  data-aos="fade-up" data-aos-delay="600"src="src/images/pudim13.jpg" alt="" />
          <img  data-aos="fade-up" data-aos-delay="700"src="src/images/pudim10.jpg" alt="" />
          <img  data-aos="fade-up" data-aos-delay="800"src="src/images/foto11.jpg" alt="" />
          
        
          <div className={css.MolduraRight}></div>
          <div className={css.MolduraLeft}></div>
        </div>
   
        <CarouselButton reference="#produtos"name="Nossos Produtos"/>

      </div>
    </section>
  );
};
export default AboutComponent;
