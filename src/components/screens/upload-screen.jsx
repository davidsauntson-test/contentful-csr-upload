import React from "react";

import { Paragraph } from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";

const UploadScreen = () => {
  const sdk = useSDK();

  return <Paragraph>Hello Page Component (AppId: {sdk.ids.app}</Paragraph>;
};

export default UploadScreen;
