import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <GridItem rowSpan={2} bg="green.400">
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <p className="styled-link">Product Journey</p>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link
                className="styled-link text-light"
                to="/createProduct?mode=create"
              >
                Create Product
              </Link>
              <Link className="styled-link text-light" to="/manageProducts">
                Manage Products
              </Link>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Payments Journey
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link className="styled-link text-light" to="/payments">
                Demo Payments
              </Link>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </GridItem>
  );
}
