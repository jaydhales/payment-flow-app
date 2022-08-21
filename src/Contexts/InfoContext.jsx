import { createContext, useState } from "react";

const InfoContext = createContext();

const InfoContextProvider = ({ children }) => {
  const initPersonal = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    lga: "",
    state: "",
  });

  const initBilling = useState({
    cardName: "",
    cardType: "",
    cardDetails: "",
    expiry: "",
    cvv: "",
  });

  const [personalInfo, setPersonalInfo] = useState(initPersonal);

  const [billingInfo, setBillingInfo] = useState(initBilling);

  const clearForm = () => {
    setPersonalInfo(initPersonal);
    setBillingInfo(initBilling);
  };

  return (
    <InfoContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        billingInfo,
        setBillingInfo,
        clearForm,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export { InfoContext, InfoContextProvider };
