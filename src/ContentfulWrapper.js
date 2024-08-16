import * as contentful from "contentful-management";

class ContentfulWrapper {
  async getPublishedSuppliers() {
    const client = contentful.createClient({
      accessToken: import.meta.env.VITE_REACT_APP_CMA_TOKEN,
    });
    const space = await client.getSpace("j9d3gn48j4iu");
    const env = await space.getEnvironment("master");
    return await env.getEntries({
      content_type: "energySupplier",
    });
  }
}

export default ContentfulWrapper;
