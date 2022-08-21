import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../Contexts/InfoContext";

const PurchaseSuccessful = () => {
  const { clearForm } = useContext(InfoContext);
  return (
    <div className="success container">
      <i className="fas fa-check fa-2x"></i>
      <h3>Purchase Successful</h3>
      <p>Please check your email for details concerning this transaction</p>

      <Link to="/" onClick={clearForm()}>
        Return Home
      </Link>
    </div>
  );
};

export default PurchaseSuccessful;
