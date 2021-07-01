import React from "react";
import {ReactComponent as Logo} from '../../assets/crown.svg'

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J8R6ASHhK0XEX9D5jV6dD2kRqYkVRdiVvcC19QC3Wl5yXUFWe3DPrL56JBrG2U1cTbFohBMqHIrSPquMsl4LGGY00i6xl5BYm";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!!!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="NN Shopping Co."
      description={`Your total price is ${priceForStripe}`}
      currency="INR"
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9T3K6eisWfL7AiOCbcV-zGZUbB3yMFZbgt1Orrym80bjumdWPGeSc30J_iEkhg5GFQM&usqp=CAU'
      shippingAddress
      billingAddress
      allowRememberMe
      panelLabel="Pay Now"
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
