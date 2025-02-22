import React from "react";
import { useSelector } from "react-redux";
import { getSuppliersNotInContentful } from "../selectors";
import {
  Badge,
  Box,
  Heading,
  Paragraph,
  Table,
} from "@contentful/f36-components";
import { getType } from "../helpers/getType";

const SuppliersNotInContentful = () => {
  const suppliersNotInContentful = useSelector(getSuppliersNotInContentful);

  const renderSuppliersToBeCreated = () => {
    return (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Supplier from spreadsheet</Table.Cell>
            <Table.Cell>Type</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {suppliersNotInContentful.map((pair) => {
            return (
              <Table.Row key={pair.supplier.id}>
                <Table.Cell>{pair.supplier.name}</Table.Cell>
                <Table.Cell>{getType(pair.supplier.isSmall)}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  };

  return (
    <Box marginTop="spacingXl" marginBottom="spacingXl">
      <Heading as="h2">Suppliers to be created</Heading>
      <Paragraph marginBottom="spacingL">
        These suppliers are in the spreadsheet but cannot be found in Contentful
        - they will be created and set to{" "}
        <Badge as="span" variant="warning">
          Draft
        </Badge>
      </Paragraph>
      {suppliersNotInContentful && suppliersNotInContentful.length > 0 ? (
        renderSuppliersToBeCreated()
      ) : (
        <Paragraph>
          There are no suppliers in the spreadsheet that aren't already in
          Contentful.
        </Paragraph>
      )}
    </Box>
  );
};

export default SuppliersNotInContentful;
