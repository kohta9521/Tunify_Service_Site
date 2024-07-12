import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ListItem, { ListItemProps } from "../ListItem";
import Link from "next/link";

// Mock the next/link component
jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => children;
});

describe("ListItem", () => {
  const props: ListItemProps = {
    id: "1",
    text: "Test Item",
    link: "/test-link",
  };

  it("renders without crashing", () => {
    const { getByText } = render(<ListItem {...props} />);
    expect(getByText("Test Item")).toBeInTheDocument();
  });

  it("renders the link correctly", () => {
    const { container } = render(<ListItem {...props} />);
    const linkElement = container.querySelector("a");
    expect(linkElement).toHaveAttribute("href", "/test-link");
  });

  it("renders the default link if no link is provided", () => {
    const defaultProps: ListItemProps = {
      ...props,
      link: "/",
    };
    const { container } = render(<ListItem {...defaultProps} />);
    const linkElement = container.querySelector("a");
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
