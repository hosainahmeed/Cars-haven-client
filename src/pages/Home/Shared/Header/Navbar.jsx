import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../../../assets/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../../../../hook/useAuth";
function Navbar() {
  const location = useLocation();
  const changeDirectory = location.pathname !== "/";
  const { user, logOut } = useAuth();
  const logoutHandle = () => {
    logOut();
  };
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-lg px-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start ">
          <img src={logo} alt="" className="md:w-16 w-12" />
          <div className="navbar-center lg:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <Link to="banner">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="services">Services</Link>
                </li>
                <li>
                  <Link to="products">Products</Link>
                </li>
                <li>
                  <Link to="testimonial">Testimonial</Link>
                </li>
                <li>
                  <Link to="contact">Contact</Link>
                </li>
                {user?.email ? (
                  <li>
                    <button onClick={logoutHandle}>Logout</button>
                  </li>
                ) : (
                  <li>
                    <NavLink to="/signin">login</NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
            {changeDirectory ? (
              <li>
                <NavLink to="/" className="hover:text-[#ff3811]">
                  Home
                </NavLink>
              </li>
            ) : (
              <li>
                <Link to="banner" className="hover:text-[#ff3811]">
                  Home
                </Link>
              </li>
            )}
            <li>
              <Link to="about" className="hover:text-[#ff3811]">
                About
              </Link>
            </li>
            <li>
              <Link to="services" className="hover:text-[#ff3811]">
                Services
              </Link>
            </li>
            <li>
              <Link to="products" className="hover:text-[#ff3811]">
                Products
              </Link>
            </li>
            <li>
              <Link to="Testimonial" className="hover:text-[#ff3811]">
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="contact" className="hover:text-[#ff3811]">
                Contact
              </Link>
            </li>
            {user?.email ? (
              <li>
                <button onClick={logoutHandle}>Logout</button>
              </li>
            ) : (
              <li>
                <NavLink to="/signin">login</NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* Right Icons and Button */}
        <div className="navbar-end flex items-center space-x-4">
          <NavLink to="/services">
            <FaShoppingCart className="text-black cursor-pointer" />
          </NavLink>
          <button className="btn text-[#ff3811] border-2 border-[#ff3811] bg-transparent hover:text-white hover:bg-[#ff3811]">
            Appointment
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
    </div>
  );
}

export default Navbar;
