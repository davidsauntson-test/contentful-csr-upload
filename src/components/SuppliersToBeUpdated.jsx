import {
  EntityStatusBadge,
  Paragraph,
  Table,
  TextLink,
} from "@contentful/f36-components";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { getMatchedSuppliersInContentful } from "../selectors";
import React from "react";
import LoadingTableCell from "./LoadingTableCell";
import { useSDK } from "@contentful/react-apps-toolkit";

const SuppliersToBeUpdated = () => {
  const suppliersToBeUpdated = useSelector(getMatchedSuppliersInContentful);
  const sdk = useSDK();

  return (
    <React.Fragment>
      {suppliersToBeUpdated.map((pair) => (
        <Table.Row key={nanoid()}>
          <Table.Cell>{pair.supplier.name}</Table.Cell>
          <Table.Cell>
            <TextLink
              onClick={() =>
                sdk.navigator.openEntry(pair.contentfulSupplier.contentfulId, {
                  slideIn: true,
                })
              }
            >
              View entry
            </TextLink>
          </Table.Cell>
          <LoadingTableCell status={pair.supplier.status}>
            <EntityStatusBadge entityStatus="changed" />
          </LoadingTableCell>
          <LoadingTableCell status={pair.supplier.status}>
            <EntityStatusBadge entityStatus="published" />
          </LoadingTableCell>
          <LoadingTableCell status={pair.supplier.status}>
            <Paragraph>last updated by</Paragraph>
          </LoadingTableCell>
          <LoadingTableCell status={pair.supplier.status}>
            <Paragraph>{pair.supplier.status}</Paragraph>
          </LoadingTableCell>
        </Table.Row>
      ))}
    </React.Fragment>
  );
};

export default SuppliersToBeUpdated;
