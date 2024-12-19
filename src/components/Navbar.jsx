import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-white dark:bg-slate-900 sticky top-0 z-50 shadow-md transition-colors duration-200">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14 hover:scale-110 transition-transform duration-200" alt="logo"/>
          </div>
        </NavLink>

        <div className="flex items-center font-medium mr-5 space-x-6">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              `text-slate-800 dark:text-slate-100 hover:text-green-400 transition duration-200 ${isActive ? "text-green-400" : ""}`
            }
          >
            <p className="text-lg">Home</p>
          </NavLink>

          <NavLink 
            to="/cart"
            className={({ isActive }) => 
              `text-slate-800 dark:text-slate-100 hover:text-green-400 transition duration-200 ${isActive ? "text-green-400" : ""}`
            }
          >
            <div className="relative">
              <FaShoppingCart className="text-2xl hover:scale-110 transition-transform duration-200"/>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                  justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>

          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;