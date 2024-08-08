import { getByRole, getDefaultNormalizer } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { mockCma, mockSdk } from "../../test/mocks";
import Page from "./Page";
import { renderWithProvider } from "../../test/utils/render-with-provider";

vi.mock("@contentful/react-apps-toolkit", () => ({
  useSDK: () => mockSdk,
  useCMA: () => mockCma,
}));

describe("Page component", () => {
  it("Component text exists", () => {
    const { getByRole } = renderWithProvider(<Page />);

    expect(
      getByRole("paragraph", {
        text: /Hello Page Component (AppId: test-app)/,
      }),
    ).toBeTruthy();
  });
});
