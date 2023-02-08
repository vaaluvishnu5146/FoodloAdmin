import { Text } from "@chakra-ui/react";
import React from "react";
import BasicTable from "../Components/Tabel/BasicTable";

export default function ManageProducts() {
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
        <BasicTable />
      </div>
    </section>
  );
}
