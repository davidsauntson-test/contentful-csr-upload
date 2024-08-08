import { describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";

import { renderWithProvider } from "../../../test/utils/render-with-provider";
import UploadScreen from "./UploadScreen";

import file from "../../../test/fixtures/tsv-file";

describe("UploadScreen component", () => {
  const { getByLabelText, getByText } = renderWithProvider(<UploadScreen />);

  it("displays a file upload", () => {
    expect(getByLabelText("Choose a .tsv file")).toBeTruthy();
  });

  it("parses a well formed tsv file with supplier data", async () => {
    const fileInput = getByLabelText("Choose a .tsv file");
    const user = userEvent.setup();

    await user.upload(fileInput, file);

    expect(getByText("Found 4 suppliers")).toBeTruthy();
  });
});
