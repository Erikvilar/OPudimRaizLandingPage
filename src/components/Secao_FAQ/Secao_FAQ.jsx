import React, { useState } from 'react';
import { MdOutlineQuestionAnswer } from "react-icons/md";
import css from './Secao_FAQ.module.css';

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
      answer: 'Sim, realizamos entregas em Uberlândia, cobrindo 90% dos bairros.'
    },
    {
      question: 'Há cobrança de taxa de entrega?',
      answer: 'Sim, a taxa de entrega é terceirizada e calculada de acordo com o endereço de destino'
    }
  ];

  return (
    <section className={css.bgFAQ}>
      <div className={css.container}>
        <h1>Perguntas Frequentes</h1>
        <hr></hr>
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
    </section>
  );
};

export default FAQ;
