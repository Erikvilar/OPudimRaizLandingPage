import React from "react";
import { BiFoodMenu } from "react-icons/bi";

import { SiIfood } from "react-icons/si";
import css from "./Secao_ondeComprar.module.css";

const ServiceData = [
  {
    title: "INSTAGRAM",
    description: "Veja e solicite em nosso perfil.",
    icon: <img src="https://github.com/samylledutra/OPudimRaizLandingPage/blob/main/src/images/instagram.png?raw=true" alt="Instagram"className={css.instagramIcon} />,
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
    description: "Consulte nosso menu completo",
    icon: <BiFoodMenu className={css.menuIcon} />,
    aosDelay: "500",
  },
];

function OndeComprar() {
  return (
    <section>
      <div className={css.bg}>
        <div className={css.container}>
          <h1 className={css.title}>Onde comprar nossos pudins</h1>
          <hr />
          <p className={css.description}>
            Você pode encontrar nossos deliciosos pudins em diversas plataformas e canais de comunicação. Escolha o método que for mais conveniente para você e desfrute de nossos sabores irresistíveis.
          </p>
          <div className={css.cards} data-aos="fade-up" data-aos-delay="300">
            {ServiceData.map((data, index) => (
              <div key={index} className={css.card} data-aos="fade-up" data-aos-delay={data.aosDelay}>
                {data.icon}
                <h2 className={css.cardTitle}>{data.title}</h2>
                <p className={css.cardDescription}>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OndeComprar;
