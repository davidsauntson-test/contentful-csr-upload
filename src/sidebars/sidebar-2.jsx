import React from 'react';
import {Badge, Box, Button, List, ListItem, Paragraph} from "@contentful/f36-components";
import {useDispatch} from "react-redux";
import {setScreen} from "../redux/screenSlice";

const Sidebar2 = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Box>
                <Paragraph marginBottom="spacingM">When you click 'Process':</Paragraph>
                <List>
                    <ListItem><b>7</b> suppliers will be <Badge variant="primary">UPDATED</Badge></ListItem>
                    <ListItem><b>1</b> supplier will be <Badge variant="warning">CREATED</Badge></ListItem>
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