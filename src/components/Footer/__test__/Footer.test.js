import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Footer component", () => {
  test("check if display elements are here", () => {
    render(<Footer />);

    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();

    const inputTextbox = screen.getByRole("textbox");
    expect(inputTextbox).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
