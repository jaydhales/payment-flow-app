import PersonalInfoRoute from "./Routes/PersonalInfoRoute.jsx";
import BillingInfoRoute from "./Routes/BillingInfoRoute.jsx";
import PaymentConfirmation from "./Routes/PaymentConfirmation.jsx";
import PurchaseSuccessful from "./Routes/PurchaseSuccessful.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { InfoContext } from "./Contexts/InfoContext.jsx";

function App() {
  const {
    isFormSubmitted,
    setIsFormSubmitted,
    personalInfo,
    billingInfo,
    setValidateForm,
  } = useContext(InfoContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      personalInfo.email.length > 0 &&
      Object.values(billingInfo).every((input) => input.length > 0)
    ) {
      setIsFormSubmitted(true);
    } else {
      setValidateForm(false);
      setTimeout(() => {
        setValidateForm(true);
      }, 3000);
    }
  };

  return (
    <div className="App">
      <div className="polygon"></div>
      {isFormSubmitted ? (
        <PurchaseSuccessful />
      ) : (
        <form onSubmit={(e) => handleFormSubmit(e)}>
          <Routes>
            <Route path="/" element={<PersonalInfoRoute />} />
            <Route path="/billing" element={<BillingInfoRoute />} />
            <Route path="/payment" element={<PaymentConfirmation />} />
          </Routes>
        </form>
      )}
    </div>
  );
}

export default App;
