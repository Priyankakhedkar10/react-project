import { Link } from "react-router-dom";
import {Heart, ShoppingCart,Trash2} from "lucide-react";
import "./Wishlist.css";
function Wishlist({  wishlist, toggleWishlist, addToCart, showToast
}) {
  const handleRemove = (product) => {toggleWishlist(product); showToast( `${product.name} removed from wishlist.`);
  };
  const handleAddToCart = (product) => { addToCart(product, 1);
    showToast(  `${product.name} added to cart!`);};

  return (
    <section className="wishlist-page">
      <div className="wishlist-header">
        <Heart size={35} />
        <h1>My Wishlist</h1>
        <p> Save your favorite beauty products and shop them whenever you want.</p>
      </div>
      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <Heart size={60} />
          <h2> Your wishlist is empty  </h2>
          <p> You haven't added any products to your wishlist yet. </p>
          <Link to="/products" className="wishlist-shop-btn"> Explore Products </Link>
        </div>
      ) : (  <>
      
          <div className="wishlist-summary">
            <p> <strong> {wishlist.length} </strong>{" "}
              {wishlist.length === 1
                ? "Product"
                : "Products"}{" "}  in your wishlist </p>
          </div>

          <div className="wishlist-grid">
            {wishlist.map((product) => (
              <div className="wishlist-card" key={product.id}>
                <div className="wishlist-image-container">
                  <img src={product.image} alt={product.name} className="wishlist-image" />
                </div>

                <div className="wishlist-info">
                  <span className="wishlist-category">  {product.category} </span>
                  <h2> {product.name} </h2>
                  <p className="wishlist-description"> {product.description} </p>
                  <h3> ₹{product.price} </h3>
                  <div className="wishlist-actions">
                    <button className="wishlist-cart-btn" onClick={() => handleAddToCart(product) }><ShoppingCart size={18} /> Add to Cart </button>
                    <button className="wishlist-remove-btn"  onClick={() => handleRemove(product)
                      }
                      title="Remove from Wishlist">
                      <Trash2 size={18} /> Remove </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </> )}
    </section> );}
export default Wishlist;