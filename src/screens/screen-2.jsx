import {Box, Paragraph, Heading, Table, MissingContent, Badge} from "@contentful/f36-components";
import {CloseIcon, DoneIcon} from "@contentful/f36-icons";

const Screen2 = () => {

    const suppliers = () => {
        let s = [];
        for (let i = 0; i < 3; i++) {
            s.push({
                id: i,
                name: `Energy supplier ${i === 2 ? "with a new name" : i}`,
                matched: true,
                matchedWith: `Energy supplier ${i === 2 ? "8" : i}`,
                status: "toBeUpdated",
                type: "ranked"

            })
        }
        s.push({
            id: 3,
            name: "Energy supplier 3",
            matched: false,
            status: "toBeCreated",
            type: "ranked"

        })
        s.push({
            id: 4,
            name: "Energy supplier 4",
            matched: true,
            status: "toBeUpdated",
            matchedWith: "Energy supplier 4",
            type: "ranked"
        })
        for (let i = 10; i < 13; i++) {
            s.push({
                id: i,
                name: `Energy supplier ${i}`,
                matchedWith: `Energy supplier ${i}`,
                matched: true,
                status: "toBeUpdated",
                type: "small"
            })
        }
        s.push({
            id: 99,
            name: `Energy supplier 99`,
            matched: false,
            status: "toBeArchived",
            type: "small"
        })
        return s;
    };

    const suppliersToBeUpdated = () => {
        return suppliers().filter(s => s.status === "toBeUpdated");
    }

    const suppliersToBeCreated = () => {
        return suppliers().filter(s => s.status === "toBeCreated");
    }

    const suppliersToBeArchived = () => {
        return suppliers().filter(s => s.status === "toBeArchived");
    }

    const renderMatchedWith = (matchedWith) => {
        if (matchedWith) {
            return <Paragraph>{matchedWith}</Paragraph>
        } else {
            return <MissingContent/>
        }
    }

    return (
        <>
            <Box marginTop="spacingXl" marginBottom="spacingXl">
                <Heading as="h2">Suppliers to be updated</Heading>
                <Paragraph marginBottom="spacingL">These suppliers are in the spreadsheet and have been found in
                    Contentful by
                    matching their <code>SupplierId</code> value. They will be updated and set to <Badge
                        variant="primary">Changed</Badge>
                </Paragraph>
                <Table>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell>Supplier from spreadsheet</Table.Cell>
                            <Table.Cell>Supplier in Contentful</Table.Cell>
                            <Table.Cell>Type</Table.Cell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {
                            suppliersToBeUpdated().map((s) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{s.name}</Table.Cell>
                                        <Table.Cell>{renderMatchedWith(s.matchedWith)}</Table.Cell>
                                        <Table.Cell>{s.type}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </Box>
            <Box marginTop="spacingXl" marginBottom="spacingXl">
                <Heading as="h2">Suppliers to be created</Heading>
                <Paragraph marginBottom="spacingL">These suppliers are in the spreadsheet but cannot be found in
                    Contentful - they will be created and set to <Badge
                        variant="warning">Draft</Badge>
                </Paragraph>
                <Table>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell>Supplier from spreadsheet</Table.Cell>
                            <Table.Cell>Type</Table.Cell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {
                            suppliersToBeCreated().map((s) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{s.name}</Table.Cell>
                                        <Table.Cell>{s.type}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </Box>
            <Box marginTop="spacingXl" marginBottom="spacingXl">
                <Heading as="h2">Suppliers to be unpublished</Heading>
                <Paragraph marginBottom="spacingL">These suppliers
                    are not in the spreadsheet but are in Contentful and currently showing on the energy table. Nothing
                    will happen to them yet.
                </Paragraph>
                <Table>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell>Supplier from Contentful</Table.Cell>
                            <Table.Cell>Type</Table.Cell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {
                            suppliersToBeArchived().map((s) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{s.name}</Table.Cell>
                                        <Table.Cell>{s.type}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </Box>
        </>
    )
}

export default Screen2;