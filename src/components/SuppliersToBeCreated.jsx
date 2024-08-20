import {
  EntityStatusBadge,
  Paragraph,
  Table,
  TextLink,
} from "@contentful/f36-components";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import {
  getMatchedSuppliersInContentful,
  getSuppliersNotInContentful,
} from "../selectors";
import React from "react";
import LoadingTableCell from "./LoadingTableCell";
import { useSDK } from "@contentful/react-apps-toolkit";
import UpdateResult from "./UpdateResult";

const SuppliersToBeCreated = () => {
  const suppliersToBeCreated = useSelector(getSuppliersNotInContentful);
  const sdk = useSDK();

  return (
    <React.Fragment>
      {suppliersToBeCreated.map((pair) => (
        <Table.Row key={nanoid()}>
          <Table.Cell>{pair.supplier.name}</Table.Cell>
          <Table.Cell>
            <TextLink
              onClick={() =>
                sdk.navigator.openEntry(pair.supplier.newContentfulId, {
                  slideIn: true,
                })
              }
            >
              View entry
            </TextLink>
          </Table.Cell>
          <LoadingTableCell status={pair.supplier.status}>
            <EntityStatusBadge entityStatus="draft" />
          </LoadingTableCell>
          <LoadingTableCell status={pair.supplier.status}>
            <EntityStatusBadge entityStatus="published" />
          </LoadingTableCell>
          <LoadingTableCell status={pair.supplier.status}>
            <UpdateResult status={pair.supplier.status} />
          </LoadingTableCell>
        </Table.Row>
      ))}
    </React.Fragment>
  );
};

export default SuppliersToBeCreated;
