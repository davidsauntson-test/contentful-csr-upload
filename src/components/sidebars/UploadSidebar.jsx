import {
  Box,
  Button,
  Paragraph,
  SectionHeading,
} from "@contentful/f36-components";
import { setScreen } from "../../state/screenSlice";
import { MATCH } from "../../constants/screens";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getCanMatch } from "../../selectors";

const UploadSidebar = () => {
  const dispatch = useDispatch();
  const enableNextButton = useSelector((state) => getCanMatch(state));

  const clickHandler = () => {
    dispatch(setScreen(MATCH));
  };

  return (
    <Box marginTop="spacingM">
      <SectionHeading>UPLOAD SUPPLIERS</SectionHeading>
      <Paragraph>
        Click 'Next' when you have chosen the correct file and resolved any
        parsing errors.
      </Paragraph>
      <Button
        variant="primary"
        isDisabled={!enableNextButton}
        onClick={() => clickHandler()}
      >
        Next
      </Button>
    </Box>
  );
};

export default UploadSidebar;
