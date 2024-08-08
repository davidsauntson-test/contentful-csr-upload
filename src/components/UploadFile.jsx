import React from "react";
import Papa from "papaparse";
import { TextInput } from "@contentful/f36-components";
import { useDispatch } from "react-redux";

import normalizeSupplier from "../helpers/normalizeSupplier";
import { addSupplier, resetSuppliers } from "../state/supplierSlice";

const UploadFile = () => {
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    dispatch(resetSuppliers());

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      delimiter: "\t",
      complete: (results) => {
        results.data.forEach((row) => {
          const supplier = normalizeSupplier(row);
          dispatch(addSupplier(supplier));
        });
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
