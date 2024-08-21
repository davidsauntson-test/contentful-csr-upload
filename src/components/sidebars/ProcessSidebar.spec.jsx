import { describe, expect, it } from "vitest";

import { renderWithProvider } from "../../../test/utils/render-with-provider";
import ProcessSidebar from "./ProcessSidebar";
import {
  suppliers,
  contentfulSuppliers,
} from "../../../test/fixtures/process-screen-state";

describe("ProcessSidebar component", () => {
  const { getByText } = renderWithProvider(<ProcessSidebar />, {
    preloadedState: {
      suppliers: { value: suppliers },
      contentfulSuppliers: { value: contentfulSuppliers },
    },
  });

  it("displays the count of suppliers to be updated", () => {
    expect(getByText(/2 suppliers will be updated/)).toBeTruthy();
  });

  it("displays the count of suppliers to be created", () => {
    expect(getByText(/1 suppliers will be created/)).toBeTruthy();
  });
});
