import { useState } from "react";
import { LOGO_URL, CART_ICON_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling nav

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={LOGO_URL} alt="Logo" />
        </Link>
      </div>

      <nav className={`nav-items ${isNavOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/menu">Menu</Link>
          </li> */}
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
        </ul>
      </nav>

      <div className="header-icons">
        <button className="cart-btn">
          <img src={CART_ICON_URL} alt="Cart Icon" />
          <span className="cart-count">{cartCount}</span>{" "}
          {/* Cart count badge */}
        </button>
        <button
          className="login-btn"
          onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
        >
          {btnName}
        </button>
      </div>

      <button className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
        &#9776;
      </button>
    </header>
  );
};

export default Header;
