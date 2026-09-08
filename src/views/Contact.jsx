import { useState } from "react";
import {MapPin,Phone, Mail,Clock,  MessageCircle, Camera, Send
} from "lucide-react";
import "./Contact.css";
function Contact({ showToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( "Contact Form Data:", formData );
    showToast(
      "Thank you! Your message has been submitted.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "" });
  };


  return (
    <section className="contact-page">
      <div className="contact-hero">
        <h1> Contact Us </h1>
        <p> We would love to hear from you.Get in touch with Beauty Bliss for any questions or support.</p>
      </div>

      <div className="contact-info-section">
        <h2> Get In Touch </h2>
        <p className="contact-intro"> Whether you have a question about our products, your order or our services, our team is here to help. </p>
        <div className="contact-cards">
          <a href="https://www.google.com/maps/search/?api=1&query=Mumbai%2C%20Maharashtra%2C%20India" target="_blank" rel="noopener noreferrer" className="contact-card contact-clickable" >
            <MapPin size={32} />
            <h3> Our Address </h3>
            <p>Beauty Bliss</p>
            <p> Mumbai, Maharashtra</p>
            <p>India </p></a>
          <a href="tel:+917249837400" className="contact-card contact-clickable">
            <Phone size={32} />
            <h3>Phone Number</h3>
            <p>+91 7249837400</p>
            <p>Monday - Saturday </p>
            <p> 10:00 AM - 7:00 PM </p> </a>
          <a href="mailto:priyankakhedkar.c21@gmail.com" className="contact-card contact-clickable">
            <Mail size={32} />
            <h3> Email Address </h3>
            <p> priyankakhedkar.c21@gmail.com </p>
            <p>  We usually reply within 24 hours. </p> </a>
          <a href="https://wa.me/917249837400" target="_blank" rel="noopener noreferrer" className="contact-card contact-clickable" >
            <MessageCircle size={32} />
            <h3>WhatsApp </h3>
            <p> +91 7249837400 </p>
            <span className="contact-link"> Chat With Us </span> </a>
        </div>
      </div>

      <div className="contact-main">
        <div className="support-section">
          <h2> Customer Support </h2>
          <p> Our customer support team is available to help you with product information, orders and general questions. </p>
          <a href="mailto:priyankakhedkar.c21@gmail.com" className="support-item support-clickable" >
            <Mail size={24} />
            <div>
              <h3>Email Support </h3>
              <p> priyankakhedkar.c21@gmail.com </p>
              <p> For product and order related questions. </p>
            </div></a>
          <a href="tel:+917249837400" className="support-item support-clickable">
            <Phone size={24} />
            <div>
              <h3>Call Support</h3>
              <p>+91 7249837400</p>
              <p>Available during working hours. </p>
            </div></a>
          <div className="social-section">
            <h3>Follow Beauty Bliss </h3>
            <p> Follow us for new products, beauty tips and special offers. </p>
            <div className="contact-social">
              <a href="https://www.instagram.com/priyanka_k_10"  target="_blank" rel="noopener noreferrer" title="Instagram" > <Camera size={22} /> </a>
              <a href="https://wa.me/917249837400" target="_blank" rel="noopener noreferrer" title="WhatsApp" > <MessageCircle size={22} /> </a>
              <a href="mailto:priyankakhedkar.c21@gmail.com" title="Email" > <Mail size={22} /> </a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2> Send Us a Message </h2>
          <p> Fill out the form below and we will get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required/>
              <input type="email" name="email"placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="subject" placeholder="Enter subject" value={formData.subject} onChange={handleChange}required/>
            </div>
            <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} required ></textarea>
            <button type="submit"> <Send size={18} /> Send Message </button>
          </form>
        </div>
      </div>

      <div className="contact-bottom">
        <h2>   We Are Here To Help</h2>
        <p> Your satisfaction is important to us. Contact Beauty Bliss anytime during our working hours and our team will be happy to assist you.</p>
      </div>
    </section> );
}
export default Contact;