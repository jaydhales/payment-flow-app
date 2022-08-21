import { createContext, useRef, useState } from "react";

const InfoContext = createContext();

const InfoContextProvider = ({ children }) => {
  const initPersonal = {
    name: "",
    email: "",
    address1: "",
    address2: "",
    lga: "",
    state: "",
  };

  const initBilling = {
    cardName: "",
    cardType: "",
    cardDetails: "",
    expiry: "",
    cvv: "",
  };

  const [personalInfo, setPersonalInfo] = useState(initPersonal);

  const [billingInfo, setBillingInfo] = useState(initBilling);

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [validateForm, setValidateForm] = useState(true);

  const clearForm = (e) => {
    e && e.preventDefault();

    setPersonalInfo(initPersonal);
    setBillingInfo(initBilling);
    setIsFormSubmitted(false);
  };

  return (
    <InfoContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        billingInfo,
        setBillingInfo,
        clearForm,
        isFormSubmitted,
        setIsFormSubmitted,
        validateForm,
        setValidateForm,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export { InfoContext, InfoContextProvider };
