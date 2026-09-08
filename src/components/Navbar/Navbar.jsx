import { Link } from "react-router-dom";
import { ShoppingCart, Heart
} from "lucide-react";
import "./Navbar.css";
function Navbar({
  cartCount,
  wishlistCount
}) {
  return (
    <nav className="navbar">
      <Link to="/"  className="logo">
        <img src="/images/logo.png" alt="Beauty Bliss Logo"/>
        <span> Beauty <b>Bliss</b></span> </Link>

      <div className="nav-links">
        <Link to="/">Home </Link>
        <Link to="/products"> Products </Link>
        <Link to="/wishlist" className="wishlist-nav-link"> <Heart size={18} /> Wishlist ({wishlistCount}) </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart" className="cart-link" >
          <ShoppingCart size={18} />
          Cart ({cartCount}) </Link>
      </div>
    </nav>);
}
export default Navbar;
