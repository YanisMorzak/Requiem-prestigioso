import { render, screen } from "@testing-library/react";
import { CartContext } from "../../../context/CartContext";
import "@testing-library/jest-dom";
import Total from "../Total";

describe("Total component", () => {
  test("renders subtotal and total when cart has items", () => {
    const cart = [{ id: 1, name: "Product 1", price: 10 }];
    const totalAmount = 10;

    render(
      <CartContext.Provider value={{ cart, total: totalAmount }}>
        <Total />
      </CartContext.Provider>
    );

    const subtotalElement = screen.getAllByText(/SubTotal/i);
    expect(subtotalElement).toHaveLength(1);

    const totalElement = screen.getAllByText(/Total/i);
    expect(totalElement).toHaveLength(2);
  });

  test("does not render subtotal and total when cart is empty", () => {
    const cart = [];
    const totalAmount = 0;

    render(
      <CartContext.Provider value={{ cart, total: totalAmount }}>
        <Total />
      </CartContext.Provider>
    );

    const subtotalElement = screen.queryByText(/SubTotal/i);
    expect(subtotalElement).not.toBeInTheDocument();

    const totalElement = screen.queryByText(/Total/i);
    expect(totalElement).not.toBeInTheDocument();
  });
});
