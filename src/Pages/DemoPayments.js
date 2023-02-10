import { Button } from "@chakra-ui/react";
import React from "react";
import { displayRazorpay } from "../PaymentModule/payment.config";

export default function DemoPayments() {
  function handlePayments() {
    displayRazorpay();
  }

  return (
    <div>
      <Button onClick={handlePayments}>Pay 500</Button>
    </div>
  );
}
