import { Box, Button, Container } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import BasicAlert from "../Components/Alert/BasicAlert";
import BasicSpinner from "../Components/Spinner";
import { discountType } from "../constants";
import BasicRadio from "../Elements/Checks/BasicRadio";
import BasicSelect from "../Elements/Select/BasicSelect";
import BasicInput from "../Elements/TextField/BasicInput";
import BasicNumberInput from "../Elements/TextField/NumberInput";
import { useSearchParams } from "react-router-dom";

export default function CreateProduct() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  /// SEARCH PARAMS FROM URL
  const productId = searchParams.get("productId");
  const mode = searchParams.get("mode");

  useEffect(() => {
    console.log("rendered");
    setData({});

    return () => {};
  }, [mode]);

  useEffect(() => {
    if (mode === "update") {
      fetch(`https://foodlo-dev-app.onrender.com/api/products/${productId}`)
        .then((response) => response.json())
        .then((result) => {
          if (result.data._id) {
            setData(result.data);
          }
        })
        .catch((err) => console.log(err));
    }

    return () => {};
  }, [mode, productId]);

  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    let dataCopy = { ...data };
    if (e.id === "foodType" || e.id === "discountType") {
      dataCopy[e.id] = e.value;
      setData(dataCopy);
    }
    if (e) {
      dataCopy[e.target.id] = e.target.value;
      setData(dataCopy);
    }
  };

  const handleSubmit = (e) => {
    setLoading(true);
    if (mode === "create") {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products`, {
        method: "POST",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          const { message = "", data = [], success = true } = result;
          if (message && data) {
            setLoading(false);
            !success ? setError(message) : setMessage(message);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    } else {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products/${productId}`, {
        method: "PUT",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          const { message = "", data = {} } = result;
          if (message && data) {
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  };

  return (
    <section id="create-product-container">
      {message && <BasicAlert type={0} message={message} />}
      {error && <BasicAlert type={1} message={error} />}{" "}
      {loading ? (
        <BasicSpinner />
      ) : (
        <Container p={10}>
          <BasicInput
            placeholder="Enter product name"
            value={data["name"]}
            id="name"
            name="name"
            onChange={handleInput}
            label="Product Name"
          />
          <Box h={5} />
          <BasicInput
            placeholder="Product image"
            value={data["imageUrl"]}
            id="imageUrl"
            name="imageUrl"
            onChange={handleInput}
            label="Product Image"
          />
          <Box h={5} />
          <BasicInput
            placeholder="Enter product description"
            value={data["description"]}
            id="description"
            name="description"
            onChange={handleInput}
            label="Product Description"
          />
          <Box h={5} />
          <BasicNumberInput
            placeholder="Enter product price"
            value={data["price"]}
            id="price"
            name="price"
            handleChange={handleInput}
            label="Product Price"
          />
          <Box h={5} />
          <BasicNumberInput
            label="Discount Value"
            placeholder="Enter product discount"
            value={data["discount"]}
            id="discount"
            name="discount"
            handleChange={handleInput}
            max={50}
          />
          <Box h={5} />
          <BasicSelect
            label="Discount Type"
            placeholder="Select discount type"
            options={discountType}
            id="discountType"
            name="discountType"
            handleChange={handleInput}
            value={data["discountType"]}
          />
          <Box h={5} />
          <BasicRadio
            label="Select Food Type"
            handleChange={handleInput}
            id="foodType"
            name="foodType"
            value={data["foodType"]}
          />
          <Box h={5} />
          <Button colorScheme="teal" variant="solid" onClick={handleSubmit}>
            {mode === "update" ? "Update Product" : "Create Product"}
          </Button>
        </Container>
      )}
    </section>
  );
}
