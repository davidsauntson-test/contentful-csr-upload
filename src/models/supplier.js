class Supplier {
  constructor(row) {
    this.id = row["SupplierId"];
    this.name = row["supplierName"];
    this.whiteLabelId = row["whiteLabelId"];
    this.isSmall = this.isSmall(row["dataAvailable"]);
    this.rank = row["supplierRank"];
    this.overallRating = row["overallRating"];
    this.complaintsRatings = row["complaintsRating"];
    this.complaintsNumber = row["complaintsNumber"];
    this.contactRating = row["contactRating"];
    this.contactTime = row["contactTime"];
    this.contactEmail = row["contactEmail%"];
    this.contactSocialMedia = row["contactSocialMedia"];
    this.guaranteeRating = row["guaranteeRating"];
    this.guaranteesList = row["guaranteesList"];
    this.contactInfo = row["contactInformation"];
    this.billingInfo = row["billingInformation"];
    this.openingHours = row["openingHours"];
    this.fuelMix = row["fuelMix"];
  }

  isSmall = (dataAvailable) => {
    return dataAvailable === "FALSE";
  };
}

export default Supplier;
