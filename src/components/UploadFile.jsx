import React from "react";
import Papa from "papaparse";
import { FormControl, TextInput } from "@contentful/f36-components";
import { useDispatch } from "react-redux";

import normalizeSupplier from "../helpers/normalizeSupplier";
import { addSupplier, resetSuppliers } from "../state/supplierSlice";
import { setErrors, resetErrors } from "../state/uploadErrorsSlice";

const UploadFile = () => {
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    dispatch(resetSuppliers());
    dispatch(resetErrors());

    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      delimiter: "\t",
      complete: (results) => {
        results.data.forEach((row) => {
          const supplier = normalizeSupplier(row);
          dispatch(addSupplier(supplier));
        });

        dispatch(setErrors(results.errors));
      },
    });
  };

  return (
    <FormControl>
      <FormControl.Label>Choose a .tsv file</FormControl.Label>
      <TextInput type="file" onChange={(e) => changeHandler(e)} />
    </FormControl>
  );
};

export default UploadFile;
