import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputDefault } from "../components/Input";

describe("Input", () => {
  it("renders the label passed as a prop", () => {
    const label = "Test Input";

    render(<InputDefault label={label} />);

    const inputLabelElement = screen.getByText(label);
    expect(inputLabelElement).toHaveTextContent(label);
  });
});
