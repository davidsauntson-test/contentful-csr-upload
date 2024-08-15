import { PARSED } from "../constants/supplier-status";

const normalizeSupplier = (row) => {
  return {
    id: row["SupplierId"],
    name: row["supplierName"],
    whiteLabelId: row["whiteLabelId"],
    isSmall: isSmall(row["dataAvailable"]),
    rank: row["supplierRank"],
    overallRating: row["overallRating"],
    complaintsRatings: row["complaintsRating"],
    complaintsNumber: row["complaintsNumber"],
    contactRating: row["contactRating"],
    contactTime: row["contactTime"],
    contactEmail: row["contactEmail%"],
    contactSocialMedia: row["contactSocialMedia"],
    guaranteeRating: row["guaranteeRating"],
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

export default normalizeSupplier;
