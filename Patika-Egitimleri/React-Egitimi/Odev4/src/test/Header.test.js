import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

test("Header rendering", () => {
  render(<Header />);
  const headerText = screen.getByText(/Emoji Search/i);
  expect(headerText).toBeInTheDocument();
});