import React from 'react';
import {Badge, Box, Button, List, ListItem, Paragraph, SectionHeading} from "@contentful/f36-components";
import {useDispatch} from "react-redux";
import {setScreen} from "../redux/screenSlice";

const Sidebar2 = () => {
    const dispatch = useDispatch();
    return (
        <>
            <SectionHeading>PROCESS SUPPLIERS</SectionHeading>
            <Box marginTop="spacingM">
                <Paragraph marginBottom="spacingM">When you click 'Process':</Paragraph>
                <List>
                    <ListItem><b>7</b> suppliers will be <Badge variant="primary">Changed</Badge></ListItem>
                    <ListItem><b>1</b> supplier will be <Badge variant="warning">Created</Badge></ListItem>
                </List>
            </Box>
            <Paragraph marginTop="spacingM">Nothing will be published or archived</Paragraph>
            <Box marginTop="spacingM">
                <Button variant="primary" onClick={() => {
                    dispatch(setScreen(3))
                }}>Process suppliers</Button>
            </Box>
        </>
    )
}

export default Sidebar2;