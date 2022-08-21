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
            setBillingInfo({ ...billingInfo, cardName: e.target.value })
          }
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="card-type">
          Card Type <span>*</span>
        </label>
        <input
          type="text"
          value={billingInfo.cardType}
          onChange={(e) =>
            setBillingInfo({ ...billingInfo, cardType: e.target.value })
          }
          required
        />
      </div>

      <div className="form-sec">
        <div className="form-group first">
          <label htmlFor="card-details">
            Card details <span>*</span>
          </label>
          <input
            type="text"
            value={billingInfo.cardDetails}
            onChange={(e) =>
              setBillingInfo({ ...billingInfo, cardDetails: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiry">
            Expiry date <span>*</span>
          </label>
          <input
            type="text"
            value={billingInfo.expiry}
            onChange={(e) =>
              setBillingInfo({ ...billingInfo, expiry: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">
            CVV <span>*</span>
          </label>
          <input
            type="text"
            value={billingInfo.cvv}
            onChange={(e) =>
              setBillingInfo({ ...billingInfo, cvv: e.target.value })
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
