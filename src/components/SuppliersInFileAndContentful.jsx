import React from "react";
import { useSelector } from "react-redux";
import { getMatchedSuppliersInContentful } from "../selectors";
import {
  Badge,
  Box,
  Heading,
  Paragraph,
  Table,
} from "@contentful/f36-components";
import { getType } from "../helpers/getType";

const SuppliersInFileAndContentful = () => {
  const suppliersInFileAndContentful = useSelector(
    getMatchedSuppliersInContentful,
  );

  const renderMatchedSuppliers = () => {
    return (
      <React.Fragment>
        <Paragraph marginBottom="spacingL">
          These suppliers are in the spreadsheet and have been found in
          Contentful by matching their <code>SupplierId</code> value. They will
          be updated and set to{" "}
          <Badge as="span" variant="primary">
            Changed
          </Badge>
        </Paragraph>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Supplier from spreadsheet</Table.Cell>
              <Table.Cell>Supplier in Contentful</Table.Cell>
              <Table.Cell>Type</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {suppliersInFileAndContentful.map((pair) => {
              return (
                <Table.Row key={pair.supplier.id}>
                  <Table.Cell>{pair.supplier.name}</Table.Cell>
                  <Table.Cell>{pair.contentfulSupplier.name}</Table.Cell>
                  <Table.Cell>{getType(pair.supplier.isSmall)}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </React.Fragment>
    );
  };

  return (
    <Box marginTop="spacingXl" marginBottom="spacingXl">
      <Heading as="h2">Suppliers to be updated</Heading>
      {suppliersInFileAndContentful &&
      suppliersInFileAndContentful.length > 0 ? (
        renderMatchedSuppliers()
      ) : (
        <Paragraph>
          No suppliers in the spreadsheet were found in Contentful
        </Paragraph>
      )}
    </Box>
  );
};

export default SuppliersInFileAndContentful;
