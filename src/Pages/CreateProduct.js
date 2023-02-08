import { Box, Button, Container } from "@chakra-ui/react";
import React, { useState } from "react";
import { discountType } from "../constants";
import BasicRadio from "../Elements/Checks/BasicRadio";
import BasicSelect from "../Elements/Select/BasicSelect";
import BasicInput from "../Elements/TextField/BasicInput";
import BasicNumberInput from "../Elements/TextField/NumberInput";

export default function CreateProduct() {
  const [data, setData] = useState({});

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
    console.log(data);
  };

  return (
    <section id="create-product-container">
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
          Create Product
        </Button>
      </Container>
    </section>
  );
}
