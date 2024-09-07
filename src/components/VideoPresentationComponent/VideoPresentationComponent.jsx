import css from "./videoPresentationComponent.module.css";
const videoPresentationComponent = () => {
  return (
    <section className={css.videoComponent}>
    <div >
      {/* <video
        autoPlay
        muted
        loop
        id="myVideo"
        src="./src/images/video/videoPresentation3.mp4"
  
      /> */}
      <img src="https://mapadacachaca.com.br/wp-content/uploads/2023/09/pudim-de-leite-condensado-optimized.jpg" alt="" />
      <div className={css.contentPresentation}>
        <h2>PUDIM TRADICIONAL DE LEITE CONDENSADO</h2>
        <div className={css.contentParagraph}>
        <p>
          Nossos pudim não tem adição de trigo nem de maisena, assado em banho
          maria com o verdadeiro leite condensado. Trabalhando com tamanho
          família de 1kg, que serve de 6 a 8 pessoas. E o individual, assado no
          potinho de 250ml, sendo o queridinho daqueles que querem saborear o
          pudim raiz sem dividir com ninguém.
        </p>
		
        <button>Eu quero!</button>
        </div>
      </div>
    </div>
    </section>
  );
};
export default videoPresentationComponent;
