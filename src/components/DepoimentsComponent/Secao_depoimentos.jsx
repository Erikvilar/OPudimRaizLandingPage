import React from 'react';
import css from './Secao_depoimentos.module.css';
import "../../styles/default.css"
import profile1 from '../../images/profile1.jpg';
import profile2 from '../../images/profile2.jpg';
import profile3 from '../../images/profile3.jpg';

const Depoimentos = () => {
  const clientes = [
    {
      nome: 'Ana Luisa',
      imagem: profile1,
      depoimento: '“Experimentei o pudim de chocolate e fiquei encantada. É cremoso, com um sabor intenso de chocolate que derrete na boca. Com certeza, o melhor pudim que já provei. Voltarei para comprar mais!”',
      aosDelay: "300",
    },
    {
      nome: 'Maria Paula',
      imagem: profile2,
      depoimento: '“O pudim de leite condensado é simplesmente divino! A textura é perfeita, e o sabor me lembra os pudins que minha avó fazia. Recomendo a todos que buscam uma sobremesa caseira e deliciosa.”',
      aosDelay: "400",
    },
    {
       nome: 'Daniel Faria',
      imagem: profile3,
      depoimento: '“O pudim de maracujá é uma verdadeira surpresa! A combinação da doçura com a acidez do maracujá é perfeita. Além disso, a entrega foi rápida e o atendimento, excelente. Super recomendo!”',
      aosDelay: "500",
    },
  ];

  return (
    <section>
      <div className={css.bgDepoimentos}>
      <div className={css.container}>
        <h1 className={"title2"}>O que nossos clientes dizem</h1>
        <div className={css.cards} data-aos="fade-up" data-aos-delay="300">
          {clientes.map((cliente, index) => (
             <div key={index} className={css.card} data-aos="zoom-in" data-aos-delay={cliente.aosDelay}>
             <p className={css.testimonial}>{cliente.depoimento}</p>
             <div className={css.profiles}>
             <img src={cliente.imagem} alt={cliente.nome} className={css.image} />
             <p className={css.name}>{cliente.nome}</p>
             </div>
           </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Depoimentos;
