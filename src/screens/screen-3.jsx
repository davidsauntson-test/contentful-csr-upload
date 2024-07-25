import {
    Box,
    Paragraph,
    Heading,
    Table,
    MissingContent,
    Badge,
    Card,
    Stack,
    EntryCard, TextLink, EntityStatusBadge
} from "@contentful/f36-components";
import {CloseIcon, DoneIcon} from "@contentful/f36-icons";
import {useSDK} from "@contentful/react-apps-toolkit";

const Screen3 = () => {

    const sdk = useSDK();

    const changedEntries = () => {
        return Array.from({length: 21}, (_, index) => {
            return {
                name: `Energy supplier ${index}`,
                url: `https://app.contentful.com/spaces/j9d3gn48j4iu/entries/${index}`,
                id: index,
                status: index % 3 === 0 ? "draft" : "changed"
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

    const renderStatus = (status) => {
        switch (status) {
            default:
            case "changed":
                return <EntityStatusBadge entityStatus="changed"/>
            case "draft":
                return <Badge variant="warning">Draft</Badge>
            case "published":
                return <Badge variant="positive">Published</Badge>
        }
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

    const rows = (entries) => {
        return entries.map((entry, _) => (
            <Table.Row>
                <Table.Cell>{entry.name}</Table.Cell>
                <Table.Cell><TextLink variant="primary" href={entry.url} target="_blank">View
                    entry</TextLink></Table.Cell>
                <Table.Cell><EntityStatusBadge entityStatus={entry.status}/></Table.Cell>
                <Table.Cell>{renderFutureStatus(entry.status)}</Table.Cell>
                <Table.Cell>CSR Upload Tool</Table.Cell>
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
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {rows(changedEntries())}
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
                        {rows(missingEntries())}
                    </Table.Body>
                </Table>
            </Box>
        </>
    )
}

export default Screen3;