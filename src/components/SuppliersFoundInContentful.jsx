import { useSelector } from "react-redux";
import {
  getContentfulSuppliersNotInFile,
  getSuppliersFoundInContentful,
  getSuppliersNotInContentful,
} from "../selectors";

const SuppliersFoundInContentful = () => {
  const suppliersInContentful = useSelector(getSuppliersFoundInContentful);
  const suppliersNotInContentful = useSelector(getSuppliersNotInContentful);
  const contentfulSuppliersNotInFile = useSelector(
    getContentfulSuppliersNotInFile,
  );

  console.log({
    suppliersInContentful,
    suppliersNotInContentful,
    contentfulSuppliersNotInFile,
  });
};

export default SuppliersFoundInContentful;
