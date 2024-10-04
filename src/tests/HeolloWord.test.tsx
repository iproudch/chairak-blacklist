import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import HelloWorld from "../components/HelloWorld";

test("demo", () => {
  expect(true).toBe(true);
});

test('renders "Hello World" text', () => {
  const { getByText } = render(<HelloWorld />);
  const helloWorldElement = getByText("Hello World");
  expect(helloWorldElement).toBeInTheDocument();
});
