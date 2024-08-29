import React from 'react';
import styles from './Secao_depoimentos.module.css';

const Depoimentos = () => {
  const clientes = [
    {
      nome: 'Ana Luiza',
      imagem: 'https://randomuser.me/api/portraits/women/30.jpg',
      depoimento: '“Experimentei o pudim de chocolate e fiquei encantada. É cremoso, com um sabor intenso de chocolate que derrete na boca. Com certeza, o melhor pudim que já provei. Voltarei para comprar mais!”',
      aosDelay: "300",
    },
    {
      nome: 'Rafaela Martins',
      imagem: 'https://randomuser.me/api/portraits/women/80.jpg',
      depoimento: '“O pudim de leite condensado é simplesmente divino! A textura é perfeita, e o sabor me lembra os pudins que minha avó fazia. Recomendo a todos que buscam uma sobremesa caseira e deliciosa.”',
      aosDelay: "500",
    },
    {
      nome: 'Daniel Ferreira',
      imagem: 'https://randomuser.me/api/portraits/men/60.jpg',
      depoimento: '“O pudim de maracujá é uma verdadeira surpresa! A combinação da doçura com a acidez do maracujá é perfeita. Além disso, a entrega foi rápida e o atendimento, excelente. Super recomendo!”',
      aosDelay: "700",
    },
  ];

  return (
    <section>
      <div className={styles.wrapper}>
        <h1>O que nossos clientes dizem</h1>
        <div className={styles.container} data-aos="fade-up" data-aos-delay="300">
          {clientes.map((cliente, index) => (
            <div key={index} className={styles.card} data-aos="zoom-in" data-aos-delay={cliente.aosDelay}>
              <img src={cliente.imagem} alt={cliente.nome} className={styles.image} />
              <h3 className={styles.name}>{cliente.nome}</h3>
              <p className={styles.testimonial}>{cliente.depoimento}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
