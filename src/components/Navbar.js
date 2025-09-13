import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/super-hero"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Superhero
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
