import { Skeleton, Table } from "@contentful/f36-components";
import React from "react";
import { PARSED } from "../constants/supplier-status";

// Whilst a supplier is in the PARSED status, it has not been updated or created in Contentful
// We show the Contentful loading animation until the update or create is successful (or otherwise)
const LoadingTableCell = ({ status, children }) => {
  return (
    <Table.Cell>
      {status === PARSED ? (
        <Skeleton.Container
          svgHeight="20px"
          svgWidth="100px"
          ariaLabel="Loading..."
        >
          <Skeleton.DisplayText />
        </Skeleton.Container>
      ) : (
        children
      )}
    </Table.Cell>
  );
};

export default LoadingTableCell;
