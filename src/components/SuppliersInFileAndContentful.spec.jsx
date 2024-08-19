import { describe, expect, it } from "vitest";

import SuppliersInFileAndContentful from "./SuppliersInFileAndContentful";
import { within } from "@testing-library/react";
import { renderWithProvider } from "../../test/utils/render-with-provider";

describe("SuppliersFoundInContentful component", () => {
  const suppliers = [
    {
      name: "I am a ranked supplier",
      rank: "1",
      overallRating: "4.9",
      complaintsRatings: "3.9",
      contactRating: "2.9",
      guaranteeRating: "1.9",
      id: "1",
    },
    {
      name: "I am another supplier",
      rank: "2",
      overallRating: "3.9",
      complaintsRatings: "2.9",
      contactRating: "1.9",
      guaranteeRating: "0.9",
      id: "2",
      isSmall: true,
    },
    {
      name: "I am a supplier that is in the file but not Contentful",
      rank: "2",
      overallRating: "3.9",
      complaintsRatings: "2.9",
      contactRating: "1.9",
      guaranteeRating: "0.9",
      id: "9",
      isSmall: true,
    },
  ];

  const contentfulSuppliers = [
    {
      name: "I am a ranked supplier in Contentful",
      id: "1",
      contentfulId: "1234",
    },
    {
      name: "I am another supplier in Contentful",
      id: "2",
      contentfulId: "5678",
    },
    {
      name: "I am a Contentful supplier that isn't in the file",
      id: "99",
      contentfulId: "9101",
    },
  ];

  const initialState = {
    suppliers: { value: suppliers },
    contentfulSuppliers: { value: contentfulSuppliers },
  };

  const { getByRole, queryByText } = renderWithProvider(
    <SuppliersInFileAndContentful />,
    { preloadedState: initialState },
  );
  const table = getByRole("table");
  const tbody = within(table).getAllByRole("rowgroup")[1]; // this is the table body
  const rows = within(tbody).getAllByRole("row");

  it("displays a row for each supplier", () => {
    expect(rows.length).toEqual(2);
  });

  it("displays the correct data for a ranked supplier", () => {
    const columns = within(rows[0]).getAllByRole("cell");
    expect(columns[0].textContent).toContain("I am a ranked supplier");
    expect(columns[1].textContent).toContain(
      "I am a ranked supplier in Contentful",
    );
    expect(columns[2].textContent).toContain("ranked");
  });

  it("displays the correct data for a small supplier", () => {
    const columns = within(rows[1]).getAllByRole("cell");
    expect(columns[0].textContent).toContain("I am another supplier");
    expect(columns[1].textContent).toContain(
      "I am another supplier in Contentful",
    );
    expect(columns[2].textContent).toContain("small");
  });

  it("does not display suppliers in Contentful but not the file", () => {
    expect(
      queryByText("I am a Contentful supplier that isn't in the file"),
    ).toBeFalsy();
  });

  it("does not display suppliers in the file but not in Contentful", () => {
    expect(
      queryByText("I am a supplier that is in the file but not Contentful"),
    ).toBeFalsy();
  });

  it("does not render anything when there are no suppliers", () => {
    const { screen } = renderWithProvider(<SuppliersInFileAndContentful />);
    expect(screen).toEqual(undefined);
  });
});
