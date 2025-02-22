import { PARSED } from "../constants/supplier-status";

const createSupplierFromTsv = (row) => {
  return {
    id: row["SupplierId"],
    name: row["supplierName"],
    whiteLabelId: row["whiteLabelId"],
    isSmall: isSmall(row["dataAvailable"]),
    rank: parseInt(row["supplierRank"], 10),
    overallRating: Number(row["overallRating"]),
    complaintsRatings: parseInt(row["complaintsRating"], 10),
    complaintsNumber: Number(row["complaintsNumber"]),
    contactRating: Number(row["contactRating"], 10),
    contactTime: row["contactTime"],
    contactEmail: Number(row["contactEmail%"], 10),
    contactSocialMedia: row["contactSocialMedia"],
    guaranteeRating: Number(row["guaranteeRating"], 10),
    guaranteesList: row["guaranteesList"],
    contactInfo: row["contactInformation"],
    billingInfo: row["billingInformation"],
    openingHours: row["openingHours"],
    fuelMix: row["fuelMix"],
    status: PARSED,
  };
};

const isSmall = (dataAvailable) => {
  return dataAvailable === "FALSE";
};

export default createSupplierFromTsv;
