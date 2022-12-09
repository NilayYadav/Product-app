import "./ProductCard.css";

export function ProductCard({ product }) {
  const { name, brand, image, price, originalPrice, discount, size } = product;
  return (
    <div className="card-container">
      <img className="card-image" src={image} alt={name} />
      <div className="card-details">
        <p className="brand">{brand}</p>
        <p className="name" title={name}>
          {name}
        </p>
        <div className="price-details">
          <p className="price">Rs. {price}</p>
          <p className="original-price">Rs. {originalPrice}</p>
          <p className="discount">{discount}% off</p>
        </div>

        <p className="sizes">
          <span>Size</span>
          {size}
        </p>
      </div>
    </div>
  );
}
