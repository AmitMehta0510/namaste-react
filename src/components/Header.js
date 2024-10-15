import { useState, useEffect } from "react";
import { LOGO_URL, CART_ICON_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  const [btnName, setBtnName] = useState("Login");
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling nav

  // Close the menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isNavOpen &&
        !event.target.closest(".nav-items") &&
        !event.target.closest(".hamburger")
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isNavOpen]);

  const handleNavClick = () => {
    setIsNavOpen(false);
  };

  return (
    <header className="header bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center py-2 px-6 mx-auto max-w-6xl">
        <div className="logo-container p-1">
          <Link to="/">
            <img
              src={LOGO_URL}
              alt="Logo"
              className="w-20 h-auto bg-white p-1 rounded-lg"
            />
          </Link>
        </div>

        {/* Navigation Items */}
        <nav
          className={`nav-items fixed top-0 right-0 h-full w-64 bg-white z-10 transition-transform transform ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          } lg:relative lg:translate-x-0 lg:w-auto lg:h-auto lg:flex lg:bg-transparent`}
        >
          <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8 lg:ml-6 font-serif">
            <li className="text-gray-700 font-semibold">
              Status: {onlineStatus ? "Online" : "Offline"}
            </li>
            <li>
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900"
                onClick={handleNavClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/grocery"
                className="text-gray-700 hover:text-gray-900"
                onClick={handleNavClick}
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900"
                onClick={handleNavClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900"
                onClick={handleNavClick}
              >
                Contact Us
              </Link>
            </li>
            <button className="cart-btn relative flex items-center">
              <img src={CART_ICON_URL} alt="Cart Icon" className="w-8 h-8" />
              <span className="cart-count absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Login Button */}
            <button
              className="login-btn bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </ul>
        </nav>

        {/* Hamburger Icon (for mobile) */}
        <button
          className="hamburger text-2xl lg:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
};

export default Header;
