import { describe, expect, it } from "vitest";

import { renderWithProvider } from "../../../test/utils/render-with-provider";
import MatchScreen from "./MatchScreen";
import { MATCH } from "../../constants/screens";

describe("MatchScreen component", () => {
  const suppliers = [
    {
      name: "I am a ranked supplier",
      isSmall: false,
    },
    {
      name: "I am another ranked supplier",
      isSmall: false,
    },
    {
      name: "I am a small supplier",
      isSmall: true,
    },
  ];

  const { getByText } = renderWithProvider(<MatchScreen />, {
    preloadedState: {
      suppliers: { value: suppliers },
      uploadErrors: { value: [] },
      appStatus: { value: MATCH },
    },
  });

  it("displays the count of ranked suppliers", () => {
    expect(getByText("Ranked Suppliers (2)")).toBeTruthy();
  });

  it("displays the ranked supplier names", () => {
    expect(getByText("I am a ranked supplier")).toBeTruthy();
    expect(getByText("I am another ranked supplier")).toBeTruthy();
  });

  it("displays the counts of small suppliers", () => {
    expect(getByText("Small Suppliers (1)")).toBeTruthy();
  });

  it("displays the small smupplier names", () => {
    expect(getByText("I am a small supplier")).toBeTruthy();
  });
});
