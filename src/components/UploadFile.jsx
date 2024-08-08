import React from "react";
import Papa from "papaparse";
import { TextInput } from "@contentful/f36-components";
import Supplier from "../models/supplier";

const UploadFile = () => {
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      delimiter: "\t",
      complete: (results) => {
        const suppliers = results.data.map((row) => new Supplier(row));
        console.table(suppliers);
      },
    });
  };

  return (
    <TextInput
      type="file"
      name="Choose a tsv file"
      onChange={(e) => changeHandler(e)}
    />
  );
};

export default UploadFile;
