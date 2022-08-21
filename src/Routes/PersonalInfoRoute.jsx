import React, { useContext } from "react";
import Header from "../Components/Header";
import FormAction from "../Components/FormAction.jsx";
import { InfoContext } from "../Contexts/InfoContext";

const PersonalInfoRoute = () => {
  const { personalInfo, setPersonalInfo } = useContext(InfoContext);

  return (
    <div className="container">
      <Header />

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={personalInfo.name}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, name: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email Address <span>*</span>
        </label>
        <small>The purchase receipt would be sent to this address</small>
        <input
          type="email"
          value={personalInfo.email}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, email: e.target.value })
          }
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="address1">Address 1</label>
        <input
          type="text"
          value={personalInfo.address1}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, address1: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="address2">Address 2</label>
        <input
          type="text"
          value={personalInfo.address2}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, address2: e.target.value })
          }
        />
      </div>

      <div className="form-sec">
        <div className="form-group first">
          <label htmlFor="lga">Local Government</label>
          <input
            type="text"
            value={personalInfo.lga}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, lga: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            value={personalInfo.state}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, state: e.target.value })
            }
          />
        </div>
      </div>

      <FormAction href="/billing"/>
    </div>
  );
};

export default PersonalInfoRoute;
