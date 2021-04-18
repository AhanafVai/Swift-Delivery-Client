import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51IeLSeSJgE6xCcepZwfRCe3saaTKyTXiJmcPBDZ5lxQDgubqhmkPpVN5BMPeG7W8FcdugjSHGquw8nXM4BzOhf2100sy1S43Qg"
);

const ProcessPayment = ({ handleShipment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handleShipment={handleShipment} />
    </Elements>
  );
};
export default ProcessPayment;
