import { render, screen } from "@testing-library/react";
import Promo from "../Promo";

describe("Promo elements testing", () => {
  test("check if images and text is here", () => {
    render(<Promo />);

    const image = screen.getAllByRole("img");
    expect(image).toHaveLength(2);

    const wordSave = screen.getAllByText(/save/i);
    expect(wordSave).toHaveLength(2);
  });
});
