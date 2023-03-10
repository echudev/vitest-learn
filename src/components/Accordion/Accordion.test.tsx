import Accordion from "./index";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="titulo">
        <h3>children title</h3>
        <p>some content</p>
      </Accordion>
    );
  });

  test("should show title all the time", () => {
    expect(screen.getByText(/titulo/i)).toBeDefined();
  });

  test("should not show the content at the start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test("should show the content when button open is clicked", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test("should hide the content when button open is clicked twice", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
