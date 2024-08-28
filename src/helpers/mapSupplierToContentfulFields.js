const emptyContentfulSupplier = {
  fields: {
    name: null,
    rank: null,
    complaintsNumber: null,
    complaintsRating: null,
    dataAvailable: null,
    overallRating: null,
    contactEmail: null,
    contactRating: null,
    guaranteeRating: null,
    supplierId: null,
  },
};

const mapSupplierToContentfulFields = (
  supplier,
  contentfulSupplier = emptyContentfulSupplier,
) => {
  contentfulSupplier.fields.name = { "en-GB": supplier.name };
  contentfulSupplier.fields.rank = { "en-GB": supplier.rank };
  contentfulSupplier.fields.complaintsNumber = {
    "en-GB": supplier.complaintsNumber,
  };
  contentfulSupplier.fields.complaintsRating = {
    "en-GB": supplier.complaintsRatings,
  };
  contentfulSupplier.fields.dataAvailable = { "en-GB": !supplier.isSmall };
  contentfulSupplier.fields.overallRating = { "en-GB": supplier.overallRating };
  contentfulSupplier.fields.contactEmail = { "en-GB": supplier.contactEmail };
  contentfulSupplier.fields.contactRating = { "en-GB": supplier.contactRating };
  contentfulSupplier.fields.guaranteeRating = {
    "en-GB": supplier.guaranteeRating,
  };
  contentfulSupplier.fields.supplierId = { "en-GB": supplier.id };

  return contentfulSupplier;
};

// TODO:
// Slug field needs updating / setting

// Markdown fields will be done in a separate PR
// contentfulSupplier.fields.contactInfo = { 'en-GB': supplier.contactInfo };
// contentfulSupplier.fields.billingInfo = { 'en-GB': supplier.billingInfo };
// contentfulSupplier.fields.fuelMix = { 'en-GB': supplier.fuelMix };
// contentfulSupplier.fields.guaranteeList = { 'en-GB': supplier.guaranteeList };
// contentfulSupplier.fields.openingHours = { 'en-GB': supplier.openingHours };

// association to whitelabel supplier will be done in a separate PR
// contentfulSupplier.fields.whitelabelSupplier = { 'en-GB': supplier.whiteLabelSupplierId };

export default mapSupplierToContentfulFields;
