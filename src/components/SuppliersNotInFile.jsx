import React from "react";
import { useSelector } from "react-redux";
import { getContentfulSuppliersNotInFile } from "../selectors";
import { Box, Heading, Paragraph, Table } from "@contentful/f36-components";
import { nanoid } from "nanoid";
import { getType } from "../helpers/getType";

const SuppliersNotInFile = () => {
  const suppliersNotInFile = useSelector(getContentfulSuppliersNotInFile);

  const renderSuppliersNotInFile = () => {
    return (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Supplier from Contentful</Table.Cell>
            <Table.Cell>Type</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {suppliersNotInFile.map((pair) => {
            return (
              <Table.Row key={nanoid()}>
                <Table.Cell>{pair.contentfulSupplier.name}</Table.Cell>
                <Table.Cell>
                  {getType(!pair.contentfulSupplier.dataAvailable)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  };

  return (
    <Box marginTop="spacingXl" marginBottom="spacingXl">
      <Heading as="h2">Suppliers to be unpublished</Heading>
      <Paragraph marginBottom="spacingL">
        These suppliers are not in the spreadsheet but are in Contentful and
        currently showing on the energy table. Nothing will happen to them yet.
      </Paragraph>
      {suppliersNotInFile && suppliersNotInFile.length > 0 ? (
        renderSuppliersNotInFile()
      ) : (
        <Paragraph>
          There are no suppliers already in Contentful that are missing from the
          spreadsheet.
        </Paragraph>
      )}
    </Box>
  );
};

export default SuppliersNotInFile;
