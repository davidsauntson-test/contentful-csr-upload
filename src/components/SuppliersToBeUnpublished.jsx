import {
  Box,
  EntityStatusBadge,
  Heading,
  Paragraph,
  Table,
  TextLink,
} from "@contentful/f36-components";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import {
  getContentfulSuppliersNotInFile,
  getMatchedSuppliersInContentful,
} from "../selectors";
import React from "react";
import LoadingTableCell from "./LoadingTableCell";
import { useSDK } from "@contentful/react-apps-toolkit";
import UpdateResult from "./UpdateResult";

const SuppliersToBeUnpublished = () => {
  const suppliersToBeUnpublished = useSelector(getContentfulSuppliersNotInFile);
  const sdk = useSDK();

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
            <Table.Cell>Action</Table.Cell>
            <Table.Cell>Current Status</Table.Cell>
            <Table.Cell>Status after scheduled events</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {suppliersToBeUnpublished.map((pair) => {
            return (
              <Table.Row key={nanoid()}>
                <Table.Cell>{pair.contentfulSupplier.name}</Table.Cell>
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
                <Table.Cell>
                  <EntityStatusBadge entityStatus="published" />
                </Table.Cell>
                <Table.Cell>
                  <EntityStatusBadge entityStatus="draft" />
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
