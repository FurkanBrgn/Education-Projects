import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("Emoji list must be rendered successfully", () => {
  render(<App />);
  const items = screen.getAllByTestId("emojiRow");
  expect(items.length).toEqual(20);
});