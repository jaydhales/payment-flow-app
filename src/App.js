import PersonalInfoRoute from "./Routes/PersonalInfoRoute.jsx";
import BillingInfoRoute from "./Routes/BillingInfoRoute.jsx";
import PaymentConfirmation from "./Routes/PaymentConfirmation.jsx";
import PurchaseSuccessful from "./Routes/PurchaseSuccessful.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="polygon"></div>
      <form onSubmit={(e) => e.preventDefault()}>
        <Routes>
          <Route path="/" element={<PersonalInfoRoute />} />
          <Route path="/billing" element={<BillingInfoRoute />} />
          <Route path="/payment" element={<PaymentConfirmation />} />
          <Route path="/success" element={<PurchaseSuccessful />} />
        </Routes>
      </form>
    </div>
  );
}

export default App;
