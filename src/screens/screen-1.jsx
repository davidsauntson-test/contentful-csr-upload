import {Box, Heading, Table, List, ListItem, Paragraph} from "@contentful/f36-components";

const Screen1 = () => {

    const rankedSuppliers = () => {
        let s = [];
        for (let i = 0; i < 6; i++) {
            s.push({
                id: i,
                name: `Energy supplier ${i}`,
                rank: i + 1,
                overallRating: (Math.random() * 5).toFixed(2),
                complaintsRating: (Math.random() * 5).toFixed(2),
                contactRating: (Math.random() * 5).toFixed(2),
                guaranteeRating: (Math.random() * 5).toFixed(2)
            })
        }
        return s;
    };

    const unrankedSuppliers = () => {
        let s = [];
        for (let i = 10; i < 13; i++) {
            s.push({
                id: i,
                name: `Energy supplier ${i}`,
                rank: i + 1,
                overallRating: (Math.random() * 5).toFixed(2),
                complaintsRating: (Math.random() * 5).toFixed(2),
                contactRating: (Math.random() * 5).toFixed(2),
                guaranteeRating: (Math.random() * 5).toFixed(2)
            })
        }
        return s;
    };

    return (
        <>
            <Box marginTop="spacingXl" marginBottom="spacingXl">
                <Paragraph>These are the suppliers found in the uploaded file.</Paragraph>
                <Heading as="h3">Ranked Suppliers</Heading>
                <Table>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell>Supplier</Table.Cell>
                            <Table.Cell>Rank</Table.Cell>
                            <Table.Cell>Overall Rating</Table.Cell>
                            <Table.Cell>Complaints Rating</Table.Cell>
                            <Table.Cell>Contact Rating</Table.Cell>
                            <Table.Cell>Guarantee Rating</Table.Cell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {
                            rankedSuppliers().map((s) => {
                                return (
                                    <Table.Row>
                                        <Table.Cell>{s.name}</Table.Cell>
                                        <Table.Cell>{s.rank}</Table.Cell>
                                        <Table.Cell>{s.overallRating}</Table.Cell>
                                        <Table.Cell>{s.complaintsRating}</Table.Cell>
                                        <Table.Cell>{s.contactRating}</Table.Cell>
                                        <Table.Cell>{s.guaranteeRating}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        }
                    </Table.Body>
                </Table>
            </Box>
            <Box marginTop="spacingXl" marginBottom="spacingXl">
                <Heading as="h3">Unranked Suppliers</Heading>
                <List>
                    {
                        unrankedSuppliers().map((s) => {
                            return (
                                <ListItem>
                                    {s.name}
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </>
    )
}

export default Screen1