import { describe, expect, it, vi } from "vitest";
import { mockCma, mockSdk } from "../../test/mocks";
import Page from "./Page";
import { renderWithProvider } from "../../test/utils/render-with-provider";

vi.mock("@contentful/react-apps-toolkit", () => ({
  useSDK: () => mockSdk,
  useCMA: () => mockCma,
}));

describe("Page component", () => {
  it("displays the upload file screen on app load", () => {
    const { getByRole } = renderWithProvider(<Page />);

    expect(
      getByRole("heading", {
        name: "Upload the data file",
      }),
    ).toBeTruthy();
  });
});
