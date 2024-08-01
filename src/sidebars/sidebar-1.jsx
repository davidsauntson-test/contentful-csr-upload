import React from 'react';
import {Box, Button, Paragraph, List, ListItem, SectionHeading} from "@contentful/f36-components";
import {useDispatch} from "react-redux";
import {setScreen} from "../redux/screenSlice";

const Sidebar1 = () => {
    const dispatch = useDispatch();
    return (
        <>
            <SectionHeading>MATCH SUPPLIERS</SectionHeading>
            <Box marginTop="spacingM">
                <Paragraph>Click 'Match suppliers' below to match the suppliers found in the spreadsheet with ones that
                    are
                    in Contentful.</Paragraph>
                <Paragraph>On the next screen, you will see:</Paragraph>
                <List>
                    <ListItem>suppliers in the spreadsheet that have been found in Contentful</ListItem>
                    <ListItem>suppliers in the spreadsheet that are not in Contentful</ListItem>
                    <ListItem>suppliers in Contentful that are not in the spreadsheet</ListItem>
                </List>
                <Paragraph marginTop="spacingM">Nothing will be changed in Contentful yet.</Paragraph>
                <Button variant="primary" onClick={() => {
                    dispatch(setScreen(2))
                }}>Match suppliers</Button>
            </Box>
        </>
    )
}

export default Sidebar1;