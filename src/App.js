import Nav from "./Components/Nav.jsx";
import PersonalInfo from "./Routes/PersonalInfo.jsx";
import BillingInfo from "./Routes/BillingInfo.jsx";
import PaymentConfirmation from "./Routes/PaymentConfirmation.jsx";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h3>Complete your Purchase</h3>
      <Nav />
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/billing" element={<BillingInfo />} />
        <Route path="/payment" element={<PaymentConfirmation />} />
      </Routes>
    </div>
  );
}

export default App;
