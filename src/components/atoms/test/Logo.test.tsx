// atoms/Logo.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import Logo from "../Logo";

describe("Logo component", () => {
  it("renders with the correct src for white logo", () => {
    const { getByAltText } = render(<Logo color="white" size="m" />);
    const img = getByAltText("Logo");
    expect(img).toHaveAttribute("src", "/logo-white.png");
  });

  it("renders with the correct src for black logo", () => {
    const { getByAltText } = render(<Logo color="black" size="m" />);
    const img = getByAltText("Logo");
    expect(img).toHaveAttribute("src", "/logo-black.png");
  });

  it("applies the correct size class", () => {
    const { getByAltText } = render(<Logo color="white" size="l" />);
    const img = getByAltText("Logo");
    expect(img).toHaveClass("w-16 h-16");
  });

  it("uses the correct default link", () => {
    const { container } = render(<Logo color="white" size="m" />);
    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "/");
  });

  it("uses the provided link", () => {
    const { container } = render(<Logo color="white" size="m" link="/home" />);
    const link = container.querySelector("a");
    expect(link).toHaveAttribute("href", "/home");
  });
});
