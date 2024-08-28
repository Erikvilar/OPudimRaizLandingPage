import css from "./HeroComponent.module.css";
const HeroComponent = () => {
  return (
    <section className={css.heroComponent}>
      <div>
        <h1>O PUDIM RAIZ O SABOR DA SUA INFANCIA</h1>
        <p>
          Bem-vindo à nossa loja! Descubra sabores irresistíveis e sobremesas
          feitas com amor. Navegue por nossas opções e leve para casa o pudim
          perfeito para tornar seus momentos ainda mais especiais.
        </p>
        <button>Eu quero</button>
      </div>
    </section>
  );
};
export default HeroComponent;
