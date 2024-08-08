import React from "react";
import { Box, Heading, Paragraph } from "@contentful/f36-components";
import { useSelector } from "react-redux";

import UploadFile from "../UploadFile";

const UploadScreen = () => {
  const supplierCount = useSelector((state) => state.suppliers.value.length);

  return (
    <Box marginTop="spacingL" marginBottom="spacingXl">
      <Heading as="h2">Upload the data file</Heading>
      <Paragraph>
        Upload the tab separated values (TSV) file that you have created from
        the energy data spreadsheet.
      </Paragraph>
      <UploadFile></UploadFile>
      {supplierCount > 0 ? (
        <Paragraph marginTop="spacingM">
          Found {supplierCount} suppliers
        </Paragraph>
      ) : null}
    </Box>
  );
};

export default UploadScreen;
