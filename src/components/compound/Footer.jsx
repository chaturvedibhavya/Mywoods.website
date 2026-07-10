import { FaEnvelope, FaHome, FaInfoCircle, FaLeaf, FaMapMarkerAlt, FaPhoneAlt, FaTree } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>
            <span className="brand-mark small"><FaTree /></span> Mywoods
          </h2>
          <p>
            Crafting warm, timeless digital experiences with forest-born character.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/"><span className="footer-icon"><FaHome /></span>Home</a>
          <a href="/about"><span className="footer-icon"><FaInfoCircle /></span>About</a>
          <a href="/woods"><span className="footer-icon"><FaLeaf /></span>Woods</a>
          <a href="/contact"><span className="footer-icon"><FaLeaf /></span>Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p><span className="footer-icon"><FaEnvelope /></span>hello@example.com</p>
          <p><span className="footer-icon"><FaPhoneAlt /></span>+91 9876543210</p>
          <p><span className="footer-icon"><FaMapMarkerAlt /></span>India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Mywoods. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;