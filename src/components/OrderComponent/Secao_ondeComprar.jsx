import React from "react";
import { BiFoodMenu } from "react-icons/bi";
import "../../styles/default.css"
import instagramIcon from "../../images/instagram.png";

import { SiIfood } from "react-icons/si";
import css from "./Secao_ondeComprar.module.css";

const ServiceData = [
  {
    title: "INSTAGRAM",
    description: "Veja e solicite em nosso perfil.",
    icon: <img src={instagramIcon} alt="Instagram" className={css.instagramIcon} />,
    aosDelay: "300",
  },
  {
    title: "IFOOD",
    description: "Solicite agora pelo iFood!",
    icon: <SiIfood className={css.ifooodIcon} />,
    aosDelay: "400",
  },
  {
    title: "CARDÁPIO VIRTUAL",
    description: "Consulte nosso menu completo.",
    icon: <BiFoodMenu className={css.menuIcon} />,
    aosDelay: "500",
  },
];

function OndeComprar() {

  const scrollToForm = () => {
    const formSection = document.getElementById("formSection");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "auto" });
    }
  };

  return (
    <section>
      <div className={css.bg}>
        <div className={css.container}>
          <h1 className={"title2"}>Onde comprar nossos pudins</h1>
          <hr />
          <p className={css.description}>
            Você pode encontrar nossos deliciosos pudins em diversas plataformas e canais de comunicação. Escolha o método que for mais conveniente para você e desfrute de nossos sabores irresistíveis.
          </p>
          <div className={css.cards} data-aos="fade-up" data-aos-delay="300">
            <div className={css.teste}>
              {ServiceData.map((data, index) => (
                <div key={index} className={css.card} data-aos="fade-up" data-aos-delay={data.aosDelay}>
                  <div data-aos="zoom-in" data-aos-delay="600">
                    <div className={css.socialsDiv}>
                      {data.icon}
                      <div className={css.socials}>
                        <h2 className={css.cardTitle}>{data.title}</h2>
                        <p className={css.cardDescription}>{data.description}</p>
                      </div>
                    </div>
                  </div>
                </div>


              ))}
            </div>
            <div className={css.imgPhone}>
              <img src="https://images.pexels.com/photos/804065/pexels-photo-804065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          </div>

          <div className={css.feedbackSection}>
            <p className={css.feedbackText}>
              Não encontrou o canal ideal para você? Deixe sua sugestão ou entre em contato!
            </p>
            <button className={css.feedbackButton} onClick={scrollToForm}>
              Entrar em contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OndeComprar;
