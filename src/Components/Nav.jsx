import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      {[
        ["Personal Info", "/"],
        ["Billing Info", "/billing"],
        ["Confirm Payment", "/payment"],
      ].map(([navInfo, href]) => (
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to={href}
        >
          {navInfo}
        </NavLink>
      ))}
    </nav>
  );
};

export default Nav;
