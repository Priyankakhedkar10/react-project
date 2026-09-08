import { Link } from "react-router-dom";
import { MessageCircle,Mail,Camera,MapPin,Phone
} from "lucide-react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand-section">
          <Link to="/" className="footer-logo">
            <img src="/images/logo.png" alt="Beauty Bliss Logo"/><span>Beauty <b>Bliss</b> </span>
          </Link>
          <p>Your Beauty, Your Confidence.</p>
          <p className="footer-description"> Discover makeup, skincare, nails and fragrance products for your everyday beauty. </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="quick-links">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-details">
            <a href="https://wa.me/917249837400" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={19} /> WhatsApp</a>
            <a href="mailto:priyankakhedkar.c21@gmail.com"> <Mail size={19} /> priyankakhedkar.c21@gmail.com </a>
            <a href="https://www.instagram.com/priyanka_k_10/" target="_blank" rel="noopener noreferrer" title="Instagram"> <Camera size={22} /> Instagram</a>
           <a href="https://www.google.com/maps/search/?api=1&query=Mumbai%2C%20Maharashtra%2C%20India" target="_blank" rel="noopener noreferrer" className="footer-map-link">
           <MapPin size={19} /> Mumbai, Maharashtra, India</a>   
            <p><a href="tel:7249837400"><Phone size={19} /> +91 7249837400</a></p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Follow Beauty Bliss for the latest beauty products and offers.</p>
          <div className="social-links">
            <a href="https://wa.me/7249837400" target="_blank" rel="noopener noreferrer" title="WhatsApp" ><MessageCircle size={22} /> </a>
            <a href="mailto:priyankakhedkar.c21@gmail.com" title="Email" > <Mail size={22} /> </a>
            <a href="https://www.instagram.com/priyanka_k_10" target="_blank" rel="noopener noreferrer" title="Instagram" ><Camera size={22} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p> © 2026 Beauty Bliss. All Rights Reserved.</p>
        <p> Beauty Bliss </p>
      </div>
    </footer> );
}
export default Footer;