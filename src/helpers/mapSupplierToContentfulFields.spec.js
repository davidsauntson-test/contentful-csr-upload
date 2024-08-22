import { describe, it, expect } from "vitest";

import mapSupplierToContentfulFields from "./mapSupplierToContentfulFields";
import { PARSED } from "../constants/supplier-status";

const testSupplier = {
  id: 1,
  name: "test supplier",
  whiteLabelId: 2,
  isSmall: false,
  rank: 99,
  overallRating: Number("3.5"),
  complaintsRatings: 3,
  complaintsNumber: Number("3"),
  contactRating: Number("3"),
  contactTime: "00:11:30",
  contactEmail: Number(99.3),
  contactSocialMedia: "99,000",
  guaranteeRating: Number("4.32"),
  guaranteesList: "- guarantee 1\n- gurantee 2\n-guarantee 3",
  contactInfo: "[01234 5678910](tel:012345678910)",
  billingInfo: "[billing@example.com](mailto:billing@example.com)",
  openingHours:
    "[www.example.com/opening-hours](https://www.example.com/opening-hours)",
  fuelMix: "fuel mix",
  status: PARSED,
};

const expectedFields = {
  name: { "en-GB": "test supplier" },
  rank: { "en-GB": 99 },
  complaintsNumber: { "en-GB": 3 },
  complaintsRating: { "en-GB": 3 },
  dataAvailable: { "en-GB": true },
  overallRating: { "en-GB": 3.5 },
  contactEmail: { "en-GB": 99.3 },
  contactRating: { "en-GB": 3 },
  guaranteeRating: { "en-GB": 4.32 },
  supplierId: { "en-GB": 1 },
};

describe("mapSupplierToContentfulFields", () => {
  it("updates the fields of an existing Contentful entry", () => {
    let contentfulEntry = {
      fields: {
        name: "old supplier name",
      },
    };

    mapSupplierToContentfulFields(testSupplier, contentfulEntry);
    expect(contentfulEntry.fields).toEqual(expectedFields);
  });

  it("creates the correct fields if no entry is passed", () => {
    expect(mapSupplierToContentfulFields(testSupplier).fields).toEqual(
      expectedFields,
    );
  });
});
