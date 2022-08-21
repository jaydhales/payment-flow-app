import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h3>Complete your Purchase</h3>
      <nav>
        {[
          ["Personal Info", "/"],
          ["Billing Info", "/billing"],
          ["Confirm Payment", "/payment"],
        ].map(([navInfo, href]) => (
          <NavLink
            key={href}
            className={(navData) => (navData.isActive ? "active" : "")}
            to={href}
          >
            {navInfo}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
