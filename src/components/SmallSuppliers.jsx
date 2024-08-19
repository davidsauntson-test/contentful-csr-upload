import React from "react";
import { nanoid } from "nanoid";
import { Box, Heading, List, ListItem } from "@contentful/f36-components";

const SmallSuppliers = ({ suppliers }) => {
  if (suppliers.length === 0) {
    return null;
  }
  return (
    <Box marginTop="spacingXl" marginBottom="spacingXl">
      <Heading as="h3">Small Suppliers ({suppliers.length})</Heading>
      <List>
        {suppliers.map((s) => (
          <ListItem key={nanoid()}>{s.name}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SmallSuppliers;
