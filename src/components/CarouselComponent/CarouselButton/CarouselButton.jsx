import scss from "./CarouselButton.module.scss";
const CarouselButton = (props) => {
  return (
    <a href={props.reference}>
      <button className={scss.carouselButton}> {props.name} </button>
    </a>
  );
};
export default CarouselButton;
