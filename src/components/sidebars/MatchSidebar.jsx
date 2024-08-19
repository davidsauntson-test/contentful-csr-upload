import {
  Box,
  Button,
  Paragraph,
  SectionHeading,
  List,
  ListItem,
} from "@contentful/f36-components";
import { setScreen } from "../../state/screenSlice";
import { PROCESS } from "../../constants/screens";
import { useDispatch } from "react-redux";
import React from "react";
import { setAppStatus } from "../../state/appStatusSlice";
import * as AppStatus from "../../constants/app-status";

const MatchSidebar = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setAppStatus(AppStatus.FETCHING_CONTENTFUL_SUPPLIERS));
    dispatch(setScreen(PROCESS));
  };

  return (
    <React.Fragment>
      <SectionHeading>MATCH SUPPLIERS</SectionHeading>
      <Box marginTop="spacingM">
        <Paragraph>
          Click 'Match suppliers' below to match the suppliers found in the
          spreadsheet with ones that are in Contentful.
        </Paragraph>
        <Paragraph>On the next screen, you will see:</Paragraph>
        <List>
          <ListItem>
            suppliers in the spreadsheet that have been found in Contentful
          </ListItem>
          <ListItem>
            suppliers in the spreadsheet that are not in Contentful
          </ListItem>
          <ListItem>
            suppliers in Contentful that are not in the spreadsheet
          </ListItem>
        </List>
        <Paragraph marginTop="spacingM">
          Nothing will be changed in Contentful yet.
        </Paragraph>
        <Button variant="primary" onClick={() => clickHandler()}>
          Match suppliers
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default MatchSidebar;
