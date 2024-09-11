import React from "react";
import { BiFoodMenu } from "react-icons/bi";
import instagramIcon from "../../images/instagram.png";
import { SiIfood } from "react-icons/si";
import css from "./Secao_ondeComprar.module.css";

const ServiceData = [
  {
    title: "INSTAGRAM",
    description: "Veja e solicite em nosso perfil.",
    icon: <img src={instagramIcon} alt="Instagram" className={css.instagramIcon} />,
    aosDelay: "300",
    link:"https://music.youtube.com/watch?v=FLQtCGbtrNo&list=RDAOpvsB-apTvwUhYClL342fGw"
  },
  {
    title: "IFOOD",
    description: "Solicite agora pelo iFood!",
    icon: <SiIfood className={css.ifooodIcon} />,
    aosDelay: "400",
    link:"https://music.youtube.com/watch?v=FLQtCGbtrNo&list=RDAOpvsB-apTvwUhYClL342fGw"
  },
  {
    title: "CARDÁPIO VIRTUAL",
    description: "Consulte nosso menu completo.",
    icon: <BiFoodMenu className={css.menuIcon} />,
    aosDelay: "500",
    link:"https://music.youtube.com/watch?v=FLQtCGbtrNo&list=RDAOpvsB-apTvwUhYClL342fGw"
  },
];

function OndeComprar() {



  return (
    <section id="pedido">
      <div className={css.bg}>
        <div className={css.container}>
          <h1 className={css.title}>NOSSOS CANAIS</h1>
          <hr />
          <p className={css.description}>
            Você pode encontrar nossos deliciosos pudins em diversas plataformas e canais de comunicação. Escolha o método que for mais conveniente para você e desfrute de nossos sabores irresistíveis.
          </p>
          <div className={css.cards} data-aos="fade-up" data-aos-delay="300">
            <div className={css.order}>
              {ServiceData.map((data, index) => (
                <a href={data.link} key={index} className={css.card} data-aos="fade-up" data-aos-delay={data.aosDelay}>
                  <div data-aos="zoom-in" data-aos-delay="600">
                    <div className={css.socialsDiv}>
                      {data.icon}
                      <div className={css.socials}>
                        <h2 className={css.cardTitle}>{data.title}</h2>
                        <p className={css.cardDescription}>{data.description}</p>
                      </div>
                    </div>
                  </div>
                </a>


              ))}
            </div>
            <div className={css.imgPhone}>
           <img src="src/images/undraw_mobile_content_xvgr.png" alt="" height={500} width={300}/>
            </div>
          </div>

          <div className={css.feedbackSection}>
            <p className={css.feedbackText}>
              Não encontrou o canal ideal para você? Deixe sua sugestão ou entre em contato!
            </p>
            <a href="#contato">
            <button className={css.feedbackButton}>
              Entrar em contato
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OndeComprar;