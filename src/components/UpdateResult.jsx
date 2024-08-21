import * as SupplierStatus from "../constants/supplier-status";
import { DoneIcon, ErrorCircleIcon } from "@contentful/f36-icons";
import { Stack, TextLink, MissingContent } from "@contentful/f36-components";

const UpdateResult = ({ status }) => {
  switch (status) {
    default:
      return <MissingContent />;
    case SupplierStatus.TO_BE_PUBLISHED:
      return (
        <Stack flexDirection="row" alignItems="center">
          <DoneIcon variant="positive" />
          <TextLink variant="positive">OK</TextLink>
        </Stack>
      );
    case SupplierStatus.CONTENTFUL_PUT_ERROR:
      return (
        <Stack flexDirection="row" alignItems="center">
          <ErrorCircleIcon variant="negative" />
          <TextLink variant="negative">Errors during update</TextLink>
        </Stack>
      );
  }
};

export default UpdateResult;
