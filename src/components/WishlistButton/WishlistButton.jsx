import { Heart } from "lucide-react";
import "./WishlistButton.css";
function WishlistButton({
  product,wishlist, toggleWishlist
}) {
  const isWishlisted = wishlist.some(
    (item) => item.id === product.id);
  return (
    <button className={`wishlist-btn ${ isWishlisted ? "active" : ""
      }`}
      onClick={() => toggleWishlist(product)}
      title={ isWishlisted
          ? "Remove from Wishlist"
          : "Add to Wishlist"
      } >
      <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} /> </button> );
}
export default WishlistButton;
