import React from "react";
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
          <ListItem key={s.id}>{s.name}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SmallSuppliers;
