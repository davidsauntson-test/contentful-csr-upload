import { describe, expect, it, afterEach } from "vitest";

import { renderWithProvider } from "../../../test/utils/render-with-provider";
import UploadSidebar from "./UploadSidebar";
import { cleanup } from "@testing-library/react";

describe("UploadSidebar component", () => {
  afterEach(() => cleanup());

  it("disables the next button by default", () => {
    const { getByRole } = renderWithProvider(<UploadSidebar />);

    expect(getByRole("button", { name: "Next", disabled: true })).toBeTruthy();
  });

  it("enables the button when the upload has finished and there are suppliers and no errors", () => {
    const uploadErrors = { value: [] };
    const suppliers = { value: [{ name: "I am a supplier" }] };
    const appStatus = { value: "parsingFinished" };

    const { getByRole } = renderWithProvider(<UploadSidebar />, {
      preloadedState: {
        uploadErrors,
        suppliers,
        appStatus,
      },
    });

    expect(
      getByRole("button", { name: "Next" }).getAttribute("disabled"),
    ).toBeFalsy();
  });

  it("disabled the next button when there are errors", () => {
    const uploadErrors = { value: ["I am an error"] };
    const suppliers = { value: [{ name: "I am a supplier" }] };
    const appStatus = { value: "parsingFinished" };

    const { getByRole } = renderWithProvider(<UploadSidebar />, {
      preloadedState: {
        uploadErrors,
        suppliers,
        appStatus,
      },
    });

    expect(getByRole("button", { name: "Next", disabled: true })).toBeTruthy();
  });

  it("disabled the next button when there are no suppliers", () => {
    const uploadErrors = { value: [] };
    const suppliers = { value: [] };
    const appStatus = { value: "parsingFinished" };

    const { getByRole } = renderWithProvider(<UploadSidebar />, {
      preloadedState: {
        uploadErrors,
        suppliers,
        appStatus,
      },
    });

    expect(getByRole("button", { name: "Next", disabled: true })).toBeTruthy();
  });
});
