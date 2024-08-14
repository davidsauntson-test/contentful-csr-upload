import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import UploadErrors from "./UploadErrors";

describe("UploadErrors component", () => {
  const errors = ["I am an error message", "I am another error message"];

  const { getByText } = render(<UploadErrors errors={errors} />);

  it("displays the error count", () => {
    expect(getByText(/Found 2 problems/)).toBeTruthy();
  });

  it("displays the error messages", () => {
    expect(getByText("I am an error message")).toBeTruthy();
    expect(getByText("I am another error message")).toBeTruthy();
  });
});
