import React from "react";

import { Box, Heading, Paragraph } from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";
import UploadFile from "../UploadFile";

const UploadScreen = () => {
  const sdk = useSDK();

  return (
    <Box marginTop="spacingL" marginBottom="spacingXl">
      <Heading as="h2">Upload the data file</Heading>
      <Paragraph>
        Upload the tab separated values (TSV) file that you have created from
        the energy data spreadsheet.
      </Paragraph>
      <UploadFile></UploadFile>
    </Box>
  );
};

export default UploadScreen;
