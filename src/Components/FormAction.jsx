import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../Contexts/InfoContext";

const FormAction = ({ href }) => {
  const { clearForm } = useContext(InfoContext);

  return (
    <div className="form-action">
      {href !== "/success" ? (
        <button>
          <Link to={href} className="next">
            Next
          </Link>
        </button>
      ) : (
        <input type="submit" value="Pay" className="next" />
      )}

      <input
        type="button"
        className="cancel"
        value=" Cancel Payment"
        onClick={(e) => clearForm(e)}
      />
    </div>
  );
};

export default FormAction;
