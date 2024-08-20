import * as contentful from "contentful-management";

const getPublishedSuppliers = async () => {
  const client = contentful.createClient({
    accessToken: import.meta.env.VITE_REACT_APP_CMA_TOKEN,
  });
  const space = await client.getSpace(
    import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID,
  );
  const env = await space.getEnvironment(
    import.meta.env.VITE_REACT_APP_CONTENTFUL_ENV,
  );
  return await env.getEntries({
    content_type: "energySupplier",
  });
};

const updateSupplier = async (pair) => {
  const client = contentful.createClient({
    accessToken: import.meta.env.VITE_REACT_APP_CMA_TOKEN,
  });
  const space = await client.getSpace(
    import.meta.env.VITE_REACT_APP_CONTENTFUL_SPACE_ID,
  );
  const env = await space.getEnvironment(
    import.meta.env.VITE_REACT_APP_CONTENTFUL_ENV,
  );

  const contentfulSupplier = await env.getEntry(
    pair.contentfulSupplier.contentfulId,
  );

  updateContentfulSupplierFields(pair.supplier, contentfulSupplier);

  return contentfulSupplier.update();
};

const updateContentfulSupplierFields = (supplier, contentfulSupplier) => {
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

  // Markdown fields will be done in a separate PR
  // contentfulSupplier.fields.contactInfo = { 'en-GB': supplier.contactInfo };
  // contentfulSupplier.fields.billingInfo = { 'en-GB': supplier.billingInfo };
  // contentfulSupplier.fields.fuelMix = { 'en-GB': supplier.fuelMix };
  // contentfulSupplier.fields.guaranteeList = { 'en-GB': supplier.guaranteeList };
  // contentfulSupplier.fields.openingHours = { 'en-GB': supplier.openingHours };

  // association to whitelabel supplier will be done in a separate PR
  // contentfulSupplier.fields.whitelabelSupplier = { 'en-GB': supplier.whiteLabelSupplierId };
};

export { getPublishedSuppliers, updateSupplier };
