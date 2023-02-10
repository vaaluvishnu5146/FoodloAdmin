import React, { useState, useEffect } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function BasicAlert({ type = "", message = "" }) {
  const [alertType, setAlertType] = useState("info");

  useEffect(() => {
    if (type === 0) {
      setAlertType("success");
    } else if (type === 1) {
      setAlertType("error");
    } else if (type === 2) {
      setAlertType("warning");
    } else {
      setAlertType("info");
    }

    return () => {};
  }, []);

  return (
    <Alert status={alertType}>
      <AlertIcon />
      {message}
    </Alert>
  );
}
