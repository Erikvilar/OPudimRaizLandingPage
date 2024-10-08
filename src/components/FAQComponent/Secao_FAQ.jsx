import React, { useState } from 'react';
import { MdOutlineQuestionAnswer } from "react-icons/md";
import css from './Secao_FAQ.module.css';
import "../../styles/default.css"

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'O pudim é feito de leite condensado?',
      answer: 'Sim, nosso pudim é feito com leite condensado e não contém adição de trigo ou amido de milho.'
    },
    {
      question: 'Quantas pessoas o pudim tamanho família serve?',
      answer: 'O pudim tamanho família serve de 6 a 8 pessoas, com porções de aproximadamente 125g por pessoa.'
    },
    {
      question: 'Vocês realizam entregas?',
      answer: 'Sim, realizamos entregas em Uberlândia - MG, cobrindo 90% dos bairros.'
    },
    {
      question: 'Há cobrança de taxa de entrega?',
      answer: 'Sim, a taxa de entrega é terceirizada e calculada de acordo com o endereço de destino.'
    },
    {
      question: 'Posso encomendar os pudins para eventos especiais?',
      answer: 'Sim, aceitamos encomendas para eventos como festas e comemorações. Basta nos avisar com antecedência para garantir a disponibilidade.'
    },
    {
      question: 'O pudim pode ser personalizado com coberturas ou sabores diferentes?',
      answer: 'Sim, oferecemos opções de personalização para coberturas e sabores adicionais. Entre em contato conosco para discutir suas preferências e fazer um pedido personalizado.'
    }
  ];

  return (
    <section >
      <div className={css.bgFAQ}>
        <div className={css.container}>
          <h1 className={"title2"}>Perguntas Frequentes</h1>
          <hr />
          <div className={css.faqItem}>
            {faqs.map((faq, index) => (
              <div key={index}>
                <div className={`${css.faqQuestion}  ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span className={css.questionText}>{faq.question}</span>
                  <MdOutlineQuestionAnswer />
                </div>

                <div
                  className={css.faqAnswer}
                  style={{ display: activeIndex === index ? 'block' : 'none' }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
