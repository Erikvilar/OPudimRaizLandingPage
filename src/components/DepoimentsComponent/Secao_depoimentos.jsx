import React from 'react';
import css from './Secao_depoimentos.module.css';
import "../../styles/default.css"

const Depoimentos = () => {
  const clientes = [
    {
      nome: 'Ana L.',
      imagem: 'https://randomuser.me/api/portraits/women/30.jpg',
      depoimento: '“Experimentei o pudim de chocolate e fiquei encantada. É cremoso, com um sabor intenso de chocolate que derrete na boca. Com certeza, o melhor pudim que já provei. Voltarei para comprar mais!”',
      aosDelay: "300",
    },
    {
      nome: 'Rafaela M.',
      imagem: 'https://randomuser.me/api/portraits/women/80.jpg',
      depoimento: '“O pudim de leite condensado é simplesmente divino! A textura é perfeita, e o sabor me lembra os pudins que minha avó fazia. Recomendo a todos que buscam uma sobremesa caseira e deliciosa.”',
      aosDelay: "400",
    },
    {
       nome: 'Daniel F.',
      imagem: 'https://randomuser.me/api/portraits/men/60.jpg',
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
