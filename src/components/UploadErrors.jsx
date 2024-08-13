import React from "react";
import { nanoid } from "nanoid";
import { List, ListItem, Paragraph } from "@contentful/f36-components";

const UploadErrors = (props) => {
  return (
    <React.Fragment>
      <Paragraph>
        Found {props.errors.length} problems in the <code>.tsv</code> file:
      </Paragraph>
      <List>
        {props.errors.map((error) => (
          <ListItem key={nanoid()}>{error}</ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default UploadErrors;
