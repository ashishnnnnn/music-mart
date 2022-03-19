import "./Product_card.css";

export const Product_card = ({ item }) => {
  return (
    <div className="card vertical-card">
      <div className="img-container">
        <img src={item.src} alt={item.categoryName} />
      </div>
      <div className="hero-container">
        <div className="hero">
          <div className="title">{item.title}</div>
        </div>
        <a className="wishlist">
          <i className="fas fa-heart"></i>
        </a>
      </div>
      <div className="price-details flex-column">
        <div className="price">Rs. {item.price}</div>
        <div className="rating">
          {Array.from({ length: item.rating }, (v, i) => i).map((_, index) => (
            <i key={index} className="fas fa-star theme-color"></i>
          ))}
        </div>
      </div>
      <a className="cart-add-btn">Add to Cart</a>
    </div>
  );
};
