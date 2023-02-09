import { Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import BasicTable from "../Components/Tabel/BasicTable";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/products/")
      .then((response) => response.json())
      .then((result) => {
        if (result.data.length > 0) {
          setProducts(result.data);
        }
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <section id="manage-products-container">
      <div
        style={{
          padding: "50px",
        }}
      >
        <Text fontSize="5xl" mb={10}>
          Manage Products
        </Text>
        <BasicTable data={products} />
      </div>
    </section>
  );
}
