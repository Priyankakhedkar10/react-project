import { useState } from "react";
import WishlistButton from "../WishlistButton/WishlistButton";
import "./ProductCard.css";
function ProductCard({product,addToCart, wishlist, toggleWishlist
}) {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    if (quantity < 9) {
      setQuantity(quantity + 1);
    } else {
      console.log(
        "You can purchase only 9 items at a time."  );
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);};

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image"/>
      <div className="product-info">
        <span className="category">  {product.category}</span>
        <h3> {product.name}</h3>
        <p> {product.description} </p>
        <h2> ₹{product.price} </h2>
        <div className="quantity">
          <button onClick={decreaseQuantity} >  - </button>
          <span>  {quantity} </span>
          <button  onClick={increaseQuantity} > + </button>
        </div>

        <p className="total"> Total: ₹  {product.price * quantity} </p>
        <div className="product-actions">
          <button className="add-btn" onClick={handleAddToCart}> Add to Cart </button>
          <WishlistButton product={product} wishlist={wishlist}  toggleWishlist={toggleWishlist} />
        </div>
      </div>
    </div> );
}
export default ProductCard;