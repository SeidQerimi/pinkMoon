import "./Product.css";

export const Product = ({ name, price, image }) => {
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
  );
};
