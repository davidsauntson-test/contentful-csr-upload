import React from 'react';
import {Box, Button} from "@contentful/f36-components";
import {useDispatch} from "react-redux";
import {setScreen} from "../redux/screenSlice";

const Sidebar1 = () => {
    const dispatch = useDispatch();
    return (
        <Box>
            <Button variant="primary" onClick={() => {
                dispatch(setScreen(2))
            }}>Match suppliers</Button>
        </Box>
    )
}

export default Sidebar1;