import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_5ZgPiihQlJkOSBsH36lgTa7M00Xb09mGHs"

  const onToken = token => {
    console.log(token);
    alert("Payment Sucessful")
  }
  return (
    <StripeCheckout
    label="Pay Now"
    name="Crown Clothing"
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/CUz.svg"
    description={`Your total is $${price}`}
    amount ={priceForStripe}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishablekey}
    />
  )
}
 export default StripeCheckoutButton;
