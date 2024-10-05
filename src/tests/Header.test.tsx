import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("renders the label passed as a prop", () => {
    // Arrange: Set up the label prop
    const label = "Test Header";

    // Act: Render the Header component with the label prop
    render(<Header label={label} />);

    // Assert: Check if the label text is rendered correctly in the h1 element
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toHaveTextContent(label);
  });

  it("renders the <hr /> element", () => {
    // Act: Render the Header component
    render(<Header label="Test Header" />);

    // Assert: Check if the <hr /> element is present in the document
    const hrElement = screen.getByRole("separator");
    expect(hrElement).toBeInTheDocument();
  });
});
