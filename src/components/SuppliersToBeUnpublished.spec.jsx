import { describe, expect, it, vi } from "vitest";

import { cleanup, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { renderWithProvider } from "../../test/utils/render-with-provider";
import {
  suppliers,
  contentfulSuppliers,
} from "../../test/fixtures/schedule-screen-state";
import SuppliersToBeUnpublished from "./SuppliersToBeUnpublished";

const openEntryMock = vi.fn();

vi.mock("@contentful/react-apps-toolkit", () => {
  return {
    useSDK: () => {
      return {
        navigator: {
          openEntry: openEntryMock,
        },
      };
    },
  };
});

describe("SuppliersToBeUnpublished component", () => {
  const { getByText, getByRole } = renderWithProvider(
    <SuppliersToBeUnpublished />,
    {
      preloadedState: {
        suppliers: { value: suppliers },
        contentfulSuppliers: { value: contentfulSuppliers },
      },
    },
  );

  it("displays a row for each supplier", () => {
    const table = getByRole("table");
    const tbody = within(table).getAllByRole("rowgroup")[1]; // this is the table body
    const rows = within(tbody).getAllByRole("row");
    expect(rows.length).toEqual(1);
  });

  it("displays the supplier in Contentful but not the file", () => {
    expect(
      getByText("Supplier in Contentful but not in the spreadsheet"),
    ).toBeTruthy();
  });

  it("displays the correct statuses", () => {
    expect(getByText("published")).toBeTruthy();
    expect(getByText("draft")).toBeTruthy();
  });

  it("displays the view entry link", async () => {
    const viewEntryLink = getByText("View entry");
    expect(viewEntryLink).toBeTruthy();

    const user = userEvent.setup();
    await user.click(viewEntryLink);

    expect(openEntryMock).toHaveBeenCalledOnce();
  });

  it("does not render anything when there are no suppliers to be created", () => {
    cleanup();
    const { screen } = renderWithProvider(<SuppliersToBeUnpublished />);
    expect(screen).toEqual(undefined);
  });
});
