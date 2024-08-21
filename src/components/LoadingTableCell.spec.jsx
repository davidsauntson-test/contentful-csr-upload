import { describe, expect, it, afterEach } from "vitest";

import { render, cleanup } from "@testing-library/react";
import LoadingTableCell from "./LoadingTableCell";
import { PARSED, TO_BE_PUBLISHED } from "../constants/supplier-status";
import { Paragraph, Table } from "@contentful/f36-components";

const cellInLoadingState = (
  <Table>
    <Table.Body>
      <Table.Row>
        <LoadingTableCell status={PARSED}>
          <Paragraph>I am not shown</Paragraph>
        </LoadingTableCell>
      </Table.Row>
    </Table.Body>
  </Table>
);

const cellInDisplayState = (
  <Table>
    <Table.Body>
      <Table.Row>
        <LoadingTableCell status={TO_BE_PUBLISHED}>
          <Paragraph>I am shown</Paragraph>
        </LoadingTableCell>
      </Table.Row>
    </Table.Body>
  </Table>
);

describe("LoadingTableCellComponent", () => {
  afterEach(() => cleanup());

  it("displays a loading animation when in loading state", () => {
    const { getByRole, queryByText } = render(cellInLoadingState);
    expect(queryByText("I am not shown")).toBeFalsy();
    expect(getByRole("img", { name: "Loading..." })).toBeTruthy();
  });

  it("displays the contents of the cell when the status is not 'PARSED'", () => {
    const { queryByRole, getByText } = render(cellInDisplayState);
    expect(queryByRole("img", { name: "Loading..." })).toBeFalsy();
    expect(getByText("I am shown")).toBeTruthy();
  });
});
