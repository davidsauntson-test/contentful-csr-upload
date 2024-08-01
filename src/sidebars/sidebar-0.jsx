import {Box, Button, Paragraph, SectionHeading} from "@contentful/f36-components";
import {setScreen} from "../redux/screenSlice";
import {useDispatch} from "react-redux";
import React from "react";

const Sidebar0 = () => {

    const dispatch = useDispatch();

    return (
        <>
            <SectionHeading>UPLOAD SUPPLIERS</SectionHeading>
            <Box marginTop="spacingM">
                <Paragraph>Click 'Next' when you have chosen the correct file.</Paragraph>
                <Button variant="primary" onClick={() => dispatch(setScreen(1))}>Next</Button>
            </Box>
        </>
    )
}

export default Sidebar0