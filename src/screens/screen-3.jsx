import {
    Box,
    Paragraph,
    Heading,
    Table,
    MissingContent,
    Badge,
    Card,
    Stack,
    EntryCard, TextLink, EntityStatusBadge, Text
} from "@contentful/f36-components";
import {CloseIcon, DoneIcon, ErrorCircleIcon} from "@contentful/f36-icons";
import {useSDK} from "@contentful/react-apps-toolkit";

const Screen3 = () => {

    const sdk = useSDK();

    const changedEntries = () => {
        return Array.from({length: 9}, (_, index) => {
            return {
                name: `Energy supplier ${index}`,
                url: `https://app.contentful.com/spaces/j9d3gn48j4iu/entries/${index}`,
                id: index,
                status: index % 3 === 0 ? "draft" : "changed",
                hasErrors: index % 11 === 0
            }
        });
    }

    const missingEntries = () => {
        return Array.from({length: 3}, (_, index) => {
            return {
                name: `Energy supplier ${index + 90}`,
                url: `https://app.contentful.com/spaces/j9d3gn48j4iu/entries/${index + 90}`,
                id: index,
                status: "published"
            }
        });
    }

    const renderFutureStatus = (status) => {
        switch (status) {
            default:
            case "changed":
            case "draft":
                return <EntityStatusBadge entityStatus="changed" isScheduled/>
            case "published":
                return <Badge variant="warning">Draft</Badge>
        }
    }

    const renderResult = (entry) => {
        if (entry.hasErrors) {
            return (
                <Stack flexDirection="row" alignItems="center">
                    <ErrorCircleIcon variant="negative"/>
                    <TextLink variant="negative" href={entry.url}>Errors during update</TextLink>
                </Stack>
            )
        } else {
            return (<DoneIcon variant="positive"/>)
        }
    }

    const rows = (entries, showResult: false) => {
        return entries.map((entry, _) => (
            <Table.Row>
                <Table.Cell style={entry.hasErrors ? {backgroundColor: "#FFF2F2"} : {}}>{entry.name}</Table.Cell>
                <Table.Cell style={entry.hasErrors ? {backgroundColor: "#FFF2F2"} : {}}><TextLink variant="primary"
                                                                                                  href={entry.url}
                                                                                                  target="_blank">View
                    entry</TextLink></Table.Cell>
                <Table.Cell style={entry.hasErrors ? {backgroundColor: "#FFF2F2"} : {}}><EntityStatusBadge
                    entityStatus={entry.status}/></Table.Cell>
                <Table.Cell
                    style={entry.hasErrors ? {backgroundColor: "#FFF2F2"} : {}}>{renderFutureStatus(entry.status)}</Table.Cell>
                <Table.Cell style={entry.hasErrors ? {backgroundColor: "#FFF2F2"} : {}}>CSR Upload Tool</Table.Cell>
                {showResult ?
                    <Table.Cell
                        style={entry.hasErrors ? {backgroundColor: "#FFF2F2"} : {}}>{renderResult(entry)}</Table.Cell>
                    : null
                }
            </Table.Row>
        ))
    };

    return (
        <>
            <Box marginTop="spacingXl" marginBottom="spacingXl">
                <Heading as="h2">Suppliers to be published</Heading>
                <Paragraph>These are the entries that have changed or been created as part of this upload. No changes
                    have been published.</Paragraph>
                <Table>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell>Supplier</Table.Cell>
                            <Table.Cell>Action</Table.Cell>
                            <Table.Cell>Current Status</Table.Cell>
                            <Table.Cell>Status after scheduled events</Table.Cell>
                            <Table.Cell>Last changed by</Table.Cell>
                            <Table.Cell>Result</Table.Cell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {rows(changedEntries(), true)}
                    </Table.Body>
                </Table>
            </Box>
            <Box marginTop="spacingXl" marginBottom="spacingXl">
                <Heading as="h2">Suppliers to be unpublished</Heading>
                <Paragraph>These are the entries that will be unpublished because they are no longer in the spreadsheet
                    data.</Paragraph>
                <Table>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell>Supplier</Table.Cell>
                            <Table.Cell>Action</Table.Cell>
                            <Table.Cell>Current Status</Table.Cell>
                            <Table.Cell>Status after scheduled events</Table.Cell>
                            <Table.Cell>Last changed by</Table.Cell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {rows(missingEntries(), false)}
                    </Table.Body>
                </Table>
            </Box>
        </>
    )
}

export default Screen3;