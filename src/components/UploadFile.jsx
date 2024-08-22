import React from "react";
import Papa from "papaparse";
import { FormControl, TextInput } from "@contentful/f36-components";
import { useDispatch } from "react-redux";

import createSupplierFromTsv from "../helpers/createSupplierFromTsv";
import { addSupplier, resetSuppliers } from "../state/supplierSlice";
import { setErrors, resetErrors } from "../state/uploadErrorsSlice";
import { setAppStatus } from "../state/appStatusSlice";
import { PARSING_FINISHED } from "../constants/app-status";

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
          const supplier = createSupplierFromTsv(row);
          dispatch(addSupplier(supplier));
        });

        dispatch(setErrors(results.errors));
        dispatch(setAppStatus(PARSING_FINISHED));
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
