import { createContext, useState } from "react";

const InfoContext = createContext();

const InfoContextProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    lga: "",
    state: "",
  });

  const [billingInfo, setBillingInfo] = useState({
    cardName: "",
    cardType: "",
    cardDetails: "",
    expiry: "",
    cvv: "",
  });

  return (
    <InfoContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        billingInfo,
        setBillingInfo,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export { InfoContext, InfoContextProvider };
