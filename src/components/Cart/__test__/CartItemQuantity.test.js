import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext } from "../../../context/CartContext";
import CartItemQuantity from "../CartItemQuantity";
import "@testing-library/jest-dom";

describe("CartItemQuantity component", () => {
  test("renders select input when item amount is less than 10", () => {
    const item = {
      id: 1,
      amount: 5,
    };

    const handleSelectMock = jest.fn();

    render(
      <CartContext.Provider value={{ handleSelect: handleSelectMock }}>
        <CartItemQuantity item={item} />
      </CartContext.Provider>
    );

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    fireEvent.change(selectElement, { target: { value: "7" } });

    expect(handleSelectMock).toHaveBeenCalledWith(expect.any(Object), 1);
  });

  test("renders input field when item amount is 10 or more", () => {
    const item = {
      id: 1,
      amount: 10,
    };

    const handleInputMock = jest.fn();

    render(
      <CartContext.Provider value={{ handleInput: handleInputMock }}>
        <CartItemQuantity item={item} />
      </CartContext.Provider>
    );

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();

    fireEvent.blur(inputElement);

    expect(handleInputMock).toHaveBeenCalledWith(expect.any(Object), 1);
  });
});
