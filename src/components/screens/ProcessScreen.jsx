import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppStatus } from "../../state/appStatusSlice";
import * as AppStatus from "../../constants/app-status";
import { getPublishedSuppliers } from "../../ContentfulWrapper";
import { addContentfulSupplier } from "../../state/contentfulSupplierSlice";
import SuppliersFoundInContentful from "../SuppliersFoundInContentful";

const ProcessScreen = () => {
  const status = useSelector((state) => state.appStatus.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === AppStatus.FETCHING_CONTENTFUL_SUPPLIERS) {
      console.log("matching started");

      getPublishedSuppliers().then((suppliers) => {
        suppliers.items.forEach((s) => {
          dispatch(
            addContentfulSupplier({
              contentfulId: s.sys.id,
              id: s.fields.supplierId["en-GB"].toString(),
              name: s.fields.name["en-GB"],
            }),
          );
        });
      });

      dispatch(setAppStatus(AppStatus.FETCHED_CONTENTFUL_SUPPLIERS));
      console.log("matching finished");
    }
  }, [status, dispatch]);

  return (
    <React.Fragment>
      <SuppliersFoundInContentful />
    </React.Fragment>
  );
};

export default ProcessScreen;
