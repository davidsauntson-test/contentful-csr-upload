import React from 'react';
import {Badge, Box, Button, List, ListItem, Paragraph} from "@contentful/f36-components";
import {useDispatch} from "react-redux";
import {setScreen} from "../redux/screenSlice";

const Sidebar3 = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Box>
                <Paragraph marginBottom="spacingM"></Paragraph>
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

export default Sidebar3;