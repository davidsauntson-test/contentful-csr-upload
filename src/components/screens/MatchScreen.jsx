import React from "react";
import { Paragraph } from "@contentful/f36-components";
import { useSelector } from "react-redux";
import { getRankedSuppliers, getSmallSuppliers } from "../../selectors";
import RankedSuppliers from "../RankedSuppliers";
import SmallSuppliers from "../SmallSuppliers";

const MatchScreen = () => {
  const rankedSuppliers = useSelector(getRankedSuppliers);
  const smallSuppliers = useSelector(getSmallSuppliers);

  return (
    <React.Fragment>
      <Paragraph>These are the suppliers found in the uploaded file.</Paragraph>
      <RankedSuppliers suppliers={rankedSuppliers} />
      <SmallSuppliers suppliers={smallSuppliers} />
    </React.Fragment>
  );
};

export default MatchScreen;
