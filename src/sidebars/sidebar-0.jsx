import {Box, Button, Heading, Paragraph, Table} from "@contentful/f36-components";
import {setScreen} from "../redux/screenSlice";
import {useDispatch} from "react-redux";

const Sidebar0 = () => {

    const dispatch = useDispatch();

    return (
        <Box>
            <Paragraph>Click 'Next' when you have chosen the correct file.</Paragraph>
            <Button variant="primary" onClick={() => dispatch(setScreen(1))}>Next</Button>
        </Box>
    )
}

export default Sidebar0