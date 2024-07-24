import {Box, Heading, Paragraph, Table} from "@contentful/f36-components";
import Papa from "papaparse";
import {useSDK} from "@contentful/react-apps-toolkit";
import * as contentful from "contentful-management";

const Sidebar0 = () => {

    const sdk = useSDK();
    let env;
    
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const client = contentful.createClient({
        accessToken: process.env.REACT_APP_CMA_TOKEN,
    });

    client.getSpace("j9d3gn48j4iu").then(async (space) => {
        env = await space.getEnvironment("master");
    });

    const updateSupplierFromTSVData = async (supplierData) => {
        try {
            const supplier = await env.getEntry(supplierData.SupplierId);
            supplier.fields.rank = {
                "en-GB": parseInt(supplierData.supplierRank, 10),
            };
            supplier.fields.overallRating = {
                "en-GB": Number(supplierData.overallRating),
            };

            await saveSupplier(supplier);
        } catch (error) {
            console.log(error);
        }
    };

    const saveSupplier = async (supplier) => {
        const response = await supplier.update();

        const success = {
            text: `${response.fields.name["en-GB"]} updated successfully`,
            link: `https://app.contentful.com/spaces/j9d3gn48j4iu/entries/${response.sys.id}`,
        };

        console.log(success);
    };

    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            delimiter: "\t",
            complete: (results) => {
                results.data.forEach((supplierData) => {
                    updateSupplierFromTSVData(supplierData);
                    delay(250);
                });
            },
        });
    };

    return (
        <Box marginTop="spacingL" marginBottom="spacingXl">
            <Heading as="h2">Upload the data file</Heading>
            <label htmlFor="upload">TSV file:</label>
            <input
                style={{display: "block"}}
                id="upload"
                type="file"
                name="file"
                accept=".tsv"
                onChange={changeHandler}
            />
        </Box>
    )
}

export default Sidebar0