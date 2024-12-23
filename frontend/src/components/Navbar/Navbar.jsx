import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// React icons
import {
  FaBarsStaggered,
  FaBook,
  FaCircleUser,
  FaXmark,
} from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const Navbar = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // console.log(cartItems);
  //   toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-20 ">
      <nav
        className={`py-4 lg:px-24 px-4  ${
          isSticky ? "static top-0 left-0 right-0 bg-purple-100" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex mr-10 md:flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-medium text-violet-700 flex items-center gap-2"
          >
            <FaBook className="inline-block" />
            Books
          </Link>

          {/* Nav items for large screen */}
          <ul className="nav-bar hidden md:flex space-x-12 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>Sell Your Books</li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>

          {/* btn for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className="w-5 hover:text-violet-700" />
            </button>
          </div>

          {/* menu btn for mobile screen */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>

          {/* navitems for sm devices */}
          <div>
            <ul
              className={`space-y-4 px-4 mt-16 py-7 bg-violet-700 ${
                isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
              }`}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/">Sell Your Book</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          {/* User Profile */}
          <div className="space-x-8 hidden lg:flex items-center">
            <button>
              <FaCircleUser className="w-5 h-5 hover:text-violet-700" />
              <div
                className="bg-white py-2 px-3 rounded-md flex-col gap-5 hidden"
                id="popup"
              >
                <p>
                  <Link to="/register">Sign Up</Link>
                </p>
                <p>
                  <Link to="/login">LogIn</Link>
                </p>
                <p>
                  <Link to="/logout">LogOut</Link>
                </p>
              </div>
            </button>
          </div>

          {/* Cart Nav */}
          <Link
            to="/cart"
            className="bg-violet-300 p-1 px-2 flex items-center rounded-sm mr-16 md:ml-5"
          >
            <HiOutlineShoppingCart className="" />

            <span className="text-sm font-semibold sm:ml-1">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
