import {
  Box,
  EntityStatusBadge,
  Heading,
  Paragraph,
  Table,
  TextLink,
} from "@contentful/f36-components";
import { useSelector } from "react-redux";
import { getContentfulSuppliersNotInFile } from "../selectors";
import React from "react";
import { useSDK } from "@contentful/react-apps-toolkit";

const SuppliersToBeUnpublished = () => {
  const suppliersToBeUnpublished = useSelector(getContentfulSuppliersNotInFile);
  const sdk = useSDK();

  if (suppliersToBeUnpublished.length === 0) {
    return (
      <Paragraph>
        All the suppliers in Contentful were found in the spreadsheet.
      </Paragraph>
    );
  }

  return (
    <Box marginTop="spacingXl" marginBottom="spacingXl">
      <Heading as="h2">Suppliers to be unpublished</Heading>
      <Paragraph>
        These are the entries that will be unpublished because they are no
        longer in the spreadsheet data.
      </Paragraph>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Supplier</Table.Cell>
            <Table.Cell>Current Status</Table.Cell>
            <Table.Cell>Status after scheduled events</Table.Cell>
            <Table.Cell>Action</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {suppliersToBeUnpublished.map((pair) => {
            return (
              <Table.Row key={pair.contentfulSupplier.contentfulId}>
                <Table.Cell>{pair.contentfulSupplier.name}</Table.Cell>
                <Table.Cell>
                  <EntityStatusBadge entityStatus="published" />
                </Table.Cell>
                <Table.Cell>
                  <EntityStatusBadge entityStatus="draft" />
                </Table.Cell>
                <Table.Cell>
                  <TextLink
                    onClick={() =>
                      sdk.navigator.openEntry(
                        pair.contentfulSupplier.contentfulId,
                        {
                          slideIn: true,
                        },
                      )
                    }
                  >
                    View entry
                  </TextLink>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Box>
  );
};

export default SuppliersToBeUnpublished;
