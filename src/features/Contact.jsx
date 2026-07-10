import { FaEnvelope, FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaTree } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2><FaTree className="contact-icon" /> Get in Touch</h2>

          <p>
            We'd love to hear from you. Whether you have a question,
            feedback, or want to work together, feel free to contact us.
          </p>

          <div className="info-box">
            <h4><FaMapMarkerAlt /> Address</h4>
            <p>New Delhi, India</p>
          </div>

          <div className="info-box">
            <h4><FaEnvelope /> Email</h4>
            <p>mywoods@gmail.com</p>
          </div>

          <div className="info-box">
            <h4><FaPhoneAlt /> Phone</h4>
            <p>+91 6391862358</p>
          </div>
        </div>

        <form className="contact-form wood-panel">
          <h2><FaLeaf /> Send Message</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />

          <textarea rows="6" placeholder="Write your message..."></textarea>

          <button type="submit"><FaEnvelope /> Send Message</button>
        </form>
      </div>
    </section>
  );
}