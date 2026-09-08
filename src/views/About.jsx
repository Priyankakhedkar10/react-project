import { Link } from "react-router-dom";
import { MapPin,Phone,Mail,Clock,Sparkles,Heart, ShoppingBag
} from "lucide-react";
import "./About.css";
function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-content">
          <h1>About Beauty Bliss</h1>
          <p> Welcome to Beauty Bliss, your simple and trusted destination for beauty products.</p>
          <p> We bring makeup, skincare, nail care and fragrance products together in one beautiful place. </p>
        </div>
      </div>

      <div className="about-section">
        <h2>  Who We Are </h2>
        <p> Beauty Bliss is a beauty e-commerce website created to make shopping for beauty products simple,convenient and enjoyable. Our collection includes carefully selected makeup, skincare, nail and fragrance products for everyday beauty needs.We believe that beauty is not only about appearance.It is also about confidence, self-care and feeling good about yourself. </p>
      </div>

      <div className="about-cards">
        <div className="about-card">
          <Sparkles size={35} />
          <h2> Our Mission</h2>
          <p> Our mission is to provide quality beauty products  at reasonable prices and make online beauty shopping simple for everyone. </p>
        </div>

        <div className="about-card">
          <Heart size={35} />
          <h2> Our Vision </h2>
          <p> Our vision is to create a trusted beauty platform where customers can discover products that help them feel confident and beautiful every day.</p>
        </div>
      </div>

      <div className="about-section offer-section">
        <h2>  What We Offer</h2>
        <div className="offer-grid">
          <div className="offer-item">
            <h3> Makeup </h3>
            <p> Lipsticks, foundation, mascara and other everyday makeup essentials.</p>
          </div>
          <div className="offer-item">
            <h3> Skincare </h3>
            <p>Beauty and skincare products designed to support soft, fresh and healthy-looking skin. </p>
          </div>
          <div className="offer-item">
            <h3> Nail Care </h3>
            <p> Beautiful nail colors and products to complete your personal beauty style. </p>
          </div>
          <div className="offer-item">
            <h3> Fragrance </h3>
            <p> Refreshing fragrances for everyday use and special occasions. </p>
          </div>
        </div>
      </div>

      <div className="about-section choose-section">
        <h2> Why Choose Beauty Bliss? </h2>
        <div className="choose-grid">
          <div className="choose-item">
            <ShoppingBag size={30} />
            <h3> Easy Shopping </h3>
            <p> Browse products and add your favorite items to your shopping cart easily. </p>
          </div>

          <div className="choose-item">
            <Sparkles size={30} />
            <h3> Beauty Collection </h3>
            <p> Explore makeup, skincare, nail care and fragrance products in one place.</p>
          </div>

          <div className="choose-item">
            <Heart size={30} />
            <h3> Customer Focused </h3>
            <p> We aim to provide a simple and comfortable shopping experience for our customers. </p>
          </div>
        </div>
      </div>

      <div className="about-contact">
        <h2> Contact Beauty Bliss </h2>
        <p>Have a question about our products or services?  Feel free to contact us </p>

        <div className="contact-info">
          <a href="https://www.google.com/maps/search/?api=1&query=Mumbai%2C%20Maharashtra%2C%20India" target="_blank" rel="noopener noreferrer" className="contact-box contact-clickable">
            <MapPin size={28} />
            <div>
              <h3> Address </h3>
              <p> Mumbai, Maharashtra, India </p> </div> </a>
          <a href="tel:+917249837400" className="contact-box contact-clickable" >
            <Phone size={28} />
            <div>
              <h3> Phone </h3>
              <p> +91 7249837400 </p> </div></a>
          <a  href="mailto:priyankakhedkae.c21@gmail.com"  className="contact-box contact-clickable" >  <Mail size={28} />
            <div>
              <h3> Email </h3>
              <p> priyankakhedkar.c21@gmail.com </p></div> </a>

          <div className="contact-box">
            <Clock size={28} />
            <div>
              <h3>  Working Hours </h3>
              <p> Monday - Saturday </p>
              <p>  10:00 AM - 7:00 PM </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h2> Discover Your Beauty </h2>
        <p> Explore our beauty collection and find products that match your style. </p>
        <Link to="/products" className="about-btn" > Explore Products  </Link>
      </div>
    </section>  );
}
export default About;