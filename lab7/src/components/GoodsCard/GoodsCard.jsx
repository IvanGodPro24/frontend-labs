import css from "./GoodsCard.module.css";

const GoodsCard = ({ images, price, title }) => {
  return (
    <>
      <img src={images[0]} alt={title} />
      <p className={css.text}>{title}</p>
      <p className={css.text}>Price: {price}$</p>
    </>
  );
};

export default GoodsCard;
