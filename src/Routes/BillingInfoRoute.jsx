import React, { useContext } from "react";
import FormAction from "../Components/FormAction";
import Header from "../Components/Header";
import { InfoContext } from "../Contexts/InfoContext";

const BillingInfoRoute = () => {
  const { billingInfo, setBillingInfo } = useContext(InfoContext);

  // cardName: "",
  //   cardType: "",
  //   cardDetails: "",
  //   expiry: "",
  //   cvv: "",

  return (
    <div className="container">
      <Header />

      <div className="form-group">
        <label htmlFor="card-name">
          Name on Card <span>*</span>
        </label>
        <input
          type="text"
          value={billingInfo.cardName}
          onChange={(e) =>
            setBillingInfo((prevObj) => ({
              ...prevObj,
              cardName: e.target.value,
            }))
          }
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="card-type">
          Card Type <span>*</span>
        </label>
        <select
          type="text"
          value={billingInfo.cardType}
          onChange={(e) =>
            setBillingInfo((prevObj) => ({
              ...prevObj,
              cardType: e.target.value,
            }))
          }
        >
          <option value="" disabled>
            Select Card Type
          </option>
          <option value="Mastercard">MasterCard</option>
          <option value="Verve">Verve</option>
          <option value="Visa">Visa</option>
        </select>
      </div>

      <div className="form-sec">
        <div className="form-group first">
          <label htmlFor="card-details">
            Card details <span>*</span>
          </label>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength="16"
            value={billingInfo.cardDetails}
            placeholder="xxxx xxxx xxxx xxxx"
            onChange={(e) =>
              setBillingInfo((prevObj) => ({
                ...prevObj,
                cardDetails: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiry">
            Expiry date <span>*</span>
          </label>
          <input
            type="tel"
            value={billingInfo.expiry}
            placeholder="XX / XX"
            onChange={(e) =>
              setBillingInfo((prevObj) => ({
                ...prevObj,
                expiry: e.target.value,
              }))
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">
            CVV <span>*</span>
          </label>
          <input
            type="password"
            maxLength="3"
            value={billingInfo.cvv}
            placeholder="XXX"
            onChange={(e) =>
              setBillingInfo((prevObj) => ({
                ...prevObj,
                cvv: e.target.value,
              }))
            }
            required
          />
        </div>
      </div>

      <FormAction href="/payment" />
    </div>
  );
};

export default BillingInfoRoute;
