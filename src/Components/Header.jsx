import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { InfoContext } from "../Contexts/InfoContext";

const Header = () => {
  const { validateForm } = useContext(InfoContext);
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

      {!validateForm && (
        <p className="form-error">
          Please fill all required fields <span>*</span>
        </p>
      )}
    </header>
  );
};

export default Header;
