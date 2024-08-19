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

export { getPublishedSuppliers };
