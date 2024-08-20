import React, { useEffect } from "react";
import {
  Box,
  EntityStatusBadge,
  Heading,
  Paragraph,
  Skeleton,
  Table,
  TextLink,
} from "@contentful/f36-components";
import { useDispatch, useSelector } from "react-redux";
import {
  getContentfulSuppliersNotInFile,
  getMatchedSuppliersInContentful,
  getSuppliersNotInContentful,
} from "../../selectors";
import {
  CONTENTFUL_PUT_ERROR,
  PARSED,
  TO_BE_PUBLISHED,
} from "../../constants/supplier-status";
import { updateSupplier } from "../../ContentfulWrapper";
import { nanoid } from "nanoid";
import { setSupplierStatus } from "../../state/supplierSlice";
import * as AppStatus from "../../constants/app-status";
import {
  PROCESSED_SUPPLEIRS,
  PROCESSING_SUPPLIERS,
} from "../../constants/app-status";
import { setAppStatus } from "../../state/appStatusSlice";

const ScheduleScreen = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.appStatus.value);

  const suppliersToBeUpdated = useSelector(getMatchedSuppliersInContentful);

  useEffect(() => {
    if (status === PROCESSING_SUPPLIERS) {
      suppliersToBeUpdated.forEach(async (pair) => {
        updateSupplier(pair)
          .then(() => {
            dispatch(
              setSupplierStatus({
                supplierId: pair.supplier.id,
                status: TO_BE_PUBLISHED,
              }),
            );
          })
          .catch(() =>
            dispatch(
              setSupplierStatus({
                supplierId: pair.supplier.id,
                status: CONTENTFUL_PUT_ERROR,
              }),
            ),
          );
      });

      dispatch(setAppStatus(PROCESSED_SUPPLEIRS));
    }
  }, [suppliersToBeUpdated, dispatch, status]);

  return (
    <React.Fragment>
      <Box marginTop="spacingXl" marginBottom="spacingXl">
        <Heading as="h2">Suppliers to be published</Heading>
        <Paragraph>
          These are the entries that have changed or been created as part of
          this upload. No changes have been published.
        </Paragraph>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell>Supplier</Table.Cell>
              <Table.Cell>Action</Table.Cell>
              <Table.Cell>Current Status</Table.Cell>
              <Table.Cell>Status after events</Table.Cell>
              <Table.Cell>Last changed by</Table.Cell>
              <Table.Cell>Result</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {suppliersToBeUpdated.map((pair) => (
              <Table.Row key={nanoid()}>
                <Table.Cell>{pair.supplier.name}</Table.Cell>
                <Table.Cell>
                  <TextLink
                    href={`https://https://app.contentful.com/spaces/j9d3gn48j4iu/environments/master/entries/${pair.contentfulSupplier.contentfulId}`}
                  >
                    View entry
                  </TextLink>
                </Table.Cell>
                <Table.Cell>
                  {pair.supplier.status === PARSED ? (
                    <Skeleton.Container svgHeight="20px" svgWidth="100px">
                      <Skeleton.DisplayText />
                    </Skeleton.Container>
                  ) : (
                    <EntityStatusBadge entityStatus="changed" />
                  )}
                </Table.Cell>
                <Table.Cell>
                  {pair.supplier.status === PARSED ? (
                    <Skeleton.Container svgHeight="20px" svgWidth="100px">
                      <Skeleton.DisplayText />
                    </Skeleton.Container>
                  ) : (
                    <EntityStatusBadge entityStatus="published" />
                  )}
                </Table.Cell>
                <Table.Cell>
                  {pair.supplier.status === PARSED ? (
                    <Skeleton.Container svgHeight="20px" svgWidth="100px">
                      <Skeleton.DisplayText />
                    </Skeleton.Container>
                  ) : (
                    <Paragraph>last updated by</Paragraph>
                  )}
                </Table.Cell>
                <Table.Cell>
                  {pair.supplier.status === PARSED ? (
                    <Skeleton.Container svgHeight="20px" svgWidth="100px">
                      <Skeleton.DisplayText />
                    </Skeleton.Container>
                  ) : (
                    <Paragraph>{pair.supplier.status}</Paragraph>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Box>
    </React.Fragment>
  );
};

export default ScheduleScreen;
