import React, {useState} from 'react';
import {
    Badge,
    Box,
    Button,
    List,
    ListItem,
    Paragraph,
    SectionHeading,
    Subheading,
    TextInput,
    Datepicker, Stack, DateTime
} from "@contentful/f36-components";
import {ClockIcon} from "@contentful/f36-icons";

const Sidebar3 = () => {
    const [selectedDay, setSelectedDay] = useState(new Date());
    const [time, setTime] = useState("00:01")

    const scheduledTime = () => {
        const [hours, minutes] = time.split(":");
        return new Date(selectedDay.setHours(hours, minutes)).toISOString();
    }

    return (
        <>
            <SectionHeading>SCHEDULE PUBLISH / UNPUBLISH</SectionHeading>
            <Box marginTop="spacingM">
                <Paragraph marginBottom="spacingM">After the event happens:</Paragraph>
                <List>
                    <ListItem><b>20</b> suppliers will be <Badge variant="positive">Published</Badge></ListItem>
                    <ListItem><b>3</b> suppliers will be <Badge variant="warning">Unpublished</Badge></ListItem>
                </List>
            </Box>
            <Box marginTop="spacingM">
                <Subheading marginBottom="spacingM">Schedule the event</Subheading>
                <Stack flexDirection="column">
                    <Datepicker selected={selectedDay} onSelect={setSelectedDay}/>
                    <TextInput value="00:01"
                               type="text"
                               placeholder="00:01"
                               onChange={(e) => setTime(e.target.value)}></TextInput>
                    <Paragraph>Publishing / unpublishing will happen on <DateTime date={scheduledTime()}/></Paragraph>
                    <Button startIcon={<ClockIcon/>} variant="primary">
                        Schedule Update
                    </Button>
                </Stack>
            </Box>
        </>
    )
}

export default Sidebar3;