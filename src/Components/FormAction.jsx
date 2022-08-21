import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../Contexts/InfoContext";

const FormAction = ({ href }) => {
  const { clearForm } = useContext(InfoContext);

  return (
    <div className="form-action">
      <button type="submit">
        <Link to={href} className="next">
          {href === "/success" ? "Pay" : "Next"}
        </Link>
      </button>

      <button className="cancel" onClick={(e) => clearForm()}>
        Cancel Payment
      </button>
    </div>
  );
};

export default FormAction;
