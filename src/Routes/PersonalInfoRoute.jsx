import React, { useContext } from "react";
import Header from "../Components/Header";
import FormAction from "../Components/FormAction.jsx";
import { InfoContext } from "../Contexts/InfoContext";

const PersonalInfoRoute = () => {
  const { personalInfo, setPersonalInfo, mailInputRef } =
    useContext(InfoContext);

  return (
    <div className="container">
      <Header />

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={personalInfo.name}
          placeholder="enter your name"
          onChange={(e) =>
            setPersonalInfo((prevObj) => ({
              ...prevObj,
              name: e.target.value,
            }))
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
          placeholder="enter your email"
          onChange={(e) =>
            setPersonalInfo((prevObj) => ({
              ...prevObj,
              email: e.target.value,
            }))
          }
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="address1">Address 1</label>
        <input
          type="text"
          value={personalInfo.address1}
          placeholder="enter your main address"
          onChange={(e) =>
            setPersonalInfo((prevObj) => ({
              ...prevObj,
              address1: e.target.value,
            }))
          }
        />
      </div>

      <div className="form-group">
        <label htmlFor="address2">Address 2</label>
        <input
          type="text"
          value={personalInfo.address2}
          placeholder="optional..."
          onChange={(e) =>
            setPersonalInfo((prevObj) => ({
              ...prevObj,
              address2: e.target.value,
            }))
          }
        />
      </div>

      <div className="form-sec">
        <div className="form-group first">
          <label htmlFor="lga">Local Government</label>
          <input
            type="text"
            value={personalInfo.lga}
            id="lga"
            onChange={(e) =>
              setPersonalInfo((prevObj) => ({
                ...prevObj,
                lga: e.target.value,
              }))
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <select
            type="text"
            value={personalInfo.state}
            id="state"
            onChange={(e) =>
              setPersonalInfo((prevObj) => ({
                ...prevObj,
                state: e.target.value,
              }))
            }
          >
            <option value="" defaultValue>
              - Select -
            </option>
            <option value="Abia">Abia</option>
            <option value="Adamawa">Adamawa</option>
            <option value="AkwaIbom">AkwaIbom</option>
            <option value="Anambra">Anambra</option>
            <option value="Bauchi">Bauchi</option>
            <option value="Bayelsa">Bayelsa</option>
            <option value="Benue">Benue</option>
            <option value="Borno">Borno</option>
            <option value="Cross River">Cross River</option>
            <option value="Delta">Delta</option>
            <option value="Ebonyi">Ebonyi</option>
            <option value="Edo">Edo</option>
            <option value="Ekiti">Ekiti</option>
            <option value="Enugu">Enugu</option>
            <option value="FCT">FCT</option>
            <option value="Gombe">Gombe</option>
            <option value="Imo">Imo</option>
            <option value="Jigawa">Jigawa</option>
            <option value="Kaduna">Kaduna</option>
            <option value="Kano">Kano</option>
            <option value="Katsina">Katsina</option>
            <option value="Kebbi">Kebbi</option>
            <option value="Kogi">Kogi</option>
            <option value="Kwara">Kwara</option>
            <option value="Lagos">Lagos</option>
            <option value="Nasarawa">Nasarawa</option>
            <option value="Niger">Niger</option>
            <option value="Ogun">Ogun</option>
            <option value="Ondo">Ondo</option>
            <option value="Osun">Osun</option>
            <option value="Oyo">Oyo</option>
            <option value="Plateau">Plateau</option>
            <option value="Rivers">Rivers</option>
            <option value="Sokoto">Sokoto</option>
            <option value="Taraba">Taraba</option>
            <option value="Yobe">Yobe</option>
            <option value="Zamfara">Zamafara</option>
          </select>
        </div>
      </div>

      <FormAction href="/billing" />
    </div>
  );
};

export default PersonalInfoRoute;
