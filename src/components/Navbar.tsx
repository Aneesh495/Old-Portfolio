import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-4 text-white flex space-x-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "underline text-indigo-400" : "hover:text-indigo-300"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "underline text-indigo-400" : "hover:text-indigo-300"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "underline text-indigo-400" : "hover:text-indigo-300"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
