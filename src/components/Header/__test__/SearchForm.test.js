import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchForm from "./../SearchForm";

describe("getByRole", () => {
  test("check if input and button are here", () => {
    render(
      <Router>
        <SearchForm />
      </Router>
    );

    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
