import React, { useState } from "react";
import {Box, Heading, Paragraph, Table} from "@contentful/f36-components";
import { useSDK } from "@contentful/react-apps-toolkit";
import Papa from "papaparse";
import * as contentful from "contentful-management";
import { Workbench } from '@contentful/f36-workbench';


function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Page = () => {
  const sdk = useSDK();

  let env;

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
    <Workbench>
      <Workbench.Header title="Energy CSR Upload Tool"></Workbench.Header>
      <Workbench.Content>
        <Box marginTop="spacingL" marginBottom="spacingXl">
          <Heading as="h2">Upload the data file</Heading>
          <label htmlFor="upload">TSV file:</label>
          <input
            style={{ display: "block" }}
            id="upload"
            type="file"
            name="file"
            accept=".tsv"
            onChange={changeHandler}
          />
        </Box>
        <Box marginTop="spacingXl" marginBottom="spacingXl">
          <Heading as="h2">Ranked Suppliers</Heading>
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
        <Heading as="h2">Ranked Suppliers</Heading>
          <Table>
            <Table.Head>
              <Table.Row>
                <Table.Cell>Supplier</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
            {
              unrankedSuppliers().map((s) => {
                return (
                    <Table.Row>
                      <Table.Cell>{s.name}</Table.Cell>
                    </Table.Row>
                )
              })
            }
            </Table.Body>
          </Table>
        </Box>
      </Workbench.Content>
      <Workbench.Sidebar>
      </Workbench.Sidebar>
    </Workbench>
  );
};

export default Page;
