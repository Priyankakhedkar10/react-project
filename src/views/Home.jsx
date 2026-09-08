import { Link } from "react-router-dom";
import {Sparkles,Heart,ShoppingBag,ShieldCheck,Truck,Star,ArrowRight} from "lucide-react";
import products from "../utils/products";
import "./Home.css";
function Home() {
  const featuredProducts = products.slice(0, 3);
  return (
    <section className="home-page">
      <div className="hero">
        <div className="hero-content">
          <span className="hero-small-title"> BEAUTY • CARE • CONFIDENCE </span>
          <h1>Discover Your<span> Beauty</span> </h1>
          <p> Explore our collection of makeup, skincare, nail care and fragrances designed to make every day beautiful.</p>
          <div className="hero-buttons">
            <Link to="/products" className="shop-btn"> Shop Now <ArrowRight size={18} /> </Link>
            <Link to="/about"className="learn-btn">Learn More</Link>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="hero-circle">
            <Sparkles size={70} />
            <h2> Beauty Bliss </h2>
            <p> Your Beauty, Your Confidence </p>
          </div>
        </div>
      </div>

      <div className="home-features">
        <div className="feature-item">
          <ShoppingBag size={30} />
          <div>
            <h3> Easy Shopping</h3>
            <p> Simple and convenient online shopping.</p>
          </div>
        </div>

        <div className="feature-item">
          <ShieldCheck size={30} />
          <div>
            <h3> Quality Products </h3>
            <p> Carefully selected beauty products.</p>
          </div>
        </div>

        <div className="feature-item">
          <Truck size={30} />
          <div>
            <h3> Fast Delivery </h3>
            <p> Get your beauty essentials delivered quickly.  </p>
          </div>
        </div>

        <div className="feature-item">
          <Heart size={30} />
          <div>
            <h3> Customer Focused </h3>
            <p>Your satisfaction is important to us. </p>
          </div>
        </div>
      </div>

      <section className="categories-section">
        <div className="section-heading">
          <span>EXPLORE</span>
          <h2> Shop By Category</h2>
          <p>Find everything you need for your everyday beauty routine. </p>
        </div>

        <div className="category-grid">
          <Link to="/products"className="category-card makeup">
            <Sparkles size={38} />
            <h3>Makeup</h3>
            <p>Lipsticks, foundation,mascara and more.</p>
            <span>Explore<ArrowRight size={16} /></span></Link>
          <Link to="/products" className="category-card skincare">
            <Heart size={38} />
            <h3> Skincare </h3>
            <p> Moisturizers and everyday skincare essentials. </p>
            <span> Explore <ArrowRight size={16} /></span> </Link>
          <Link to="/products" className="category-card nails"> <Star size={38} />
            <h3> Nail Care </h3>
            <p> Beautiful nail colors for every style. </p>
            <span>  Explore <ArrowRight size={16} /> </span> </Link>
          <Link to="/products" className="category-card fragrance" ><Sparkles size={38} />
            <h3> Fragrance </h3>
            <p> Refreshing fragrances for every occasion.</p>
            <span> Explore <ArrowRight size={16} /></span></Link>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about-content">
          <span> ABOUT BEAUTY BLISS </span>
          <h2> Beauty Made Simple </h2>
          <p> Beauty Bliss is your simple and trusted destination for everyday beauty products.</p>
          <p> From makeup and skincare to nail care and fragrances, we bring your beauty essentials together in one beautiful place.</p>
          <p> We believe beauty is about more than appearance. It is about confidence, self-care and feeling good about yourself. </p>
          <Link to="/about" className="about-home-btn" > Discover More <ArrowRight size={18} /></Link>
        </div>

        <div className="home-about-box">
          <Sparkles size={55} />
          <h3>Your Beauty </h3>
          <h2>Your Confidence </h2>
          <p> Feel beautiful.Feel confident. </p>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <span> OUR COLLECTION </span>
          <h2> Featured Products </h2>
          <p> Discover some of our popular beauty essentials.</p>
        </div>

        <div className="featured-grid">
          {featuredProducts.map(
            (product) => (
              <div className="featured-card" key={product.id} >
                <div className="featured-image">
                  <img src={product.image} alt={product.name} />
                </div>

                <div className="featured-info">
                  <span> {product.category} </span>
                  <h3> {product.name} </h3>
                  <p> {product.description} </p>
                  <div className="featured-bottom">
                    <strong> ₹{product.price} </strong>
                    <Link to="/products" title="View Product" ><ArrowRight size={20} /></Link>
                  </div>
                </div>
              </div>) )}
        </div>

        <div className="view-products">
          <Link to="/products" className="view-products-btn"> View All Products
            <ArrowRight size={18} /> </Link>
        </div>
      </section>

      <section className="why-section">
        <div className="section-heading">
          <span> WHY BEAUTY BLISS </span>
          <h2> Everything You Need </h2>
          <p> We make your beauty shopping experience simple and enjoyable.</p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
              <ShoppingBag size={30} />
            </div>
            <h3> Easy Shopping </h3>
            <p> Browse our collection and find your favorite products  with ease. </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <ShieldCheck size={30} />
            </div>
            <h3> Quality First </h3>
            <p> We focus on providing carefully selected beauty products.</p>
          </div>
          <div className="why-card">
            <div className="why-icon">
              <Heart size={30} /></div>
            <h3> Beauty With Care</h3>
            <p> Choose products that fit your personal beauty routine.  </p>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <Star size={30} />
            </div>
            <h3> Great Collection</h3>
            <p> Makeup, skincare, nails and fragrance in one place.</p>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <Sparkles size={40} />
          <h2> Ready to Discover Your Beauty?  </h2>
          <p> Explore our collection and find products made for your beauty routine. </p>
          <Link to="/products" className="cta-btn"  >  Start Shopping  <ArrowRight size={18} /> </Link>
        </div>
      </section>
    </section> );
}
export default Home;