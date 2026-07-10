
import { FaCompass, FaHome, FaInfoCircle, FaLeaf, FaTree } from "react-icons/fa";

function Header() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(true);
  };

  return (
    <header className="header wood-header">
      <div className="logo">
        <span className="brand-mark">
          <FaTree />
        </span>
        <div>
          <h2>Mywoods</h2>
          <p>Timeless wooden stories</p>
        </div>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="/"><span className="nav-icon"><FaHome /></span>Home</a></li>
          <li><a href="/about"><span className="nav-icon"><FaInfoCircle /></span>About</a></li>
          <li><a href="/woods"><span className="nav-icon"><FaCompass /></span>Woods</a></li>
          <li><a href="/contact"><span className="nav-icon"><FaLeaf /></span>Contact</a></li>
          {localStorage.getItem("token") ? <li><a href="/cms">CMS</a></li> : <li><a href="/login">Login</a></li>}
        </ul>
      </nav>

      {localStorage.getItem("token") ? (
        <button className="btn" onClick={() => handleLogout()}>
          <FaLeaf /> Logout
        </button>
      ) : ""}
    </header>
  );
}

export default Header;