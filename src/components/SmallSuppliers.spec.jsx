import { describe, expect, it } from "vitest";

import SmallSuppliers from "./SmallSuppliers";
import { render } from "@testing-library/react";

describe("SmallSuppliers component", () => {
  const suppliers = [
    {
      name: "I am a small supplier",
      id: 1,
    },
    {
      name: "I am another small supplier",
      id: 2,
    },
  ];

  const { getByText } = render(<SmallSuppliers suppliers={suppliers} />);

  it("displays each supplier name", () => {
    expect(getByText("I am a small supplier")).toBeTruthy();
    expect(getByText("I am another small supplier")).toBeTruthy();
  });

  it("does not render anything when there are no suppliers", () => {
    const { screen } = render(<SmallSuppliers suppliers={[]} />);
    expect(screen).toEqual(undefined);
  });
});
