import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("it click on emoji  must be copied", () => {
  render(<App />);
  const clicks = screen.getAllByTestId("emojiRow");
  expect(clicks[0]).toHaveAttribute("data-clipboard-text");
});