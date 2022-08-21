import FormAction from "../Components/FormAction";
import Header from "../Components/Header";

const PaymentConfirmation = () => {
  return (
    <div className="container">
      <Header />

      <div className="item-card">
        <div className="card-header card-row">
          <p>Item Name</p>
          <p>&#8358; Price</p>
        </div>

        <div className="card-content">
          <div className="card-row">
            <p>Data Science and usability</p>
            <p>50,000.00</p>
          </div>
          <div className="card-row">
            <p>Shipping</p>
            <p>0.00</p>
          </div>
        </div>

        <div className="item-total card-row">
          <p>Total</p>
          <p>50,000.00</p>
        </div>
      </div>

      <FormAction href={"/success"} />
    </div>
  );
};

export default PaymentConfirmation;
