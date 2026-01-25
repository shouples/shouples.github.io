import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/posts", label: "Posts" },
];

export function Navigation() {
  return (
    <nav className="nav">
      {navItems.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
