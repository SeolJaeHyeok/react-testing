import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

/**
 * 1. Greet 컴포넌트는 Greet 문자열을 렌더링 해야 한다.
 * 2. Greet 컴포넌트는 Greet, {name} 문자열을 렌더링 해야 한다.
 */

describe("Grouping", () => {
  it("Greet 컴포넌트는 Greet를 렌더링해야 한다.", () => {
    render(<Greet />);
    const textElement = screen.getByText("Greet");
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  it("Greet 컴포넌트는 Greet, {name} 문자열을 렌더링 해야 한다.", () => {
    render(<Greet name="milkboy2564" />);
    const textElement = screen.getByText("Greet milkboy2564");
    expect(textElement).toBeInTheDocument();
  });
});
