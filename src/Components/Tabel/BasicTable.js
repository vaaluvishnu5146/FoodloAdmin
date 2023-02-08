import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import BasicMenu from "../Menu/BasicMenu";
import { manageProductsTableOption } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function BasicTable() {
  const navigate = useNavigate();
  const handleOptions = (value) => {
    if (value === 0) {
      navigate("/editProduct/1?mode=update");
    } else if (value === 1) {
    }
  };

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Food that we cook</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Food Type</Th>
            <Th isNumeric>Price</Th>
            <Th isNumeric>Discount</Th>
            <Th>Discount Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Pepproni Pizza</Td>
            <Td>Veg</Td>
            <Td isNumeric>329</Td>
            <Td isNumeric>10</Td>
            <Td>%</Td>
            <Td>
              <BasicMenu
                options={manageProductsTableOption}
                handleOptions={handleOptions}
              />
            </Td>
          </Tr>
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
}
