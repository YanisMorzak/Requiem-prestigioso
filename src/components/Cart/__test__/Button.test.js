import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../Button";

describe("getByRole", () => {
  test("check if button are here", () => {
    render(<Button />);

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
