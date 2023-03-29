import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application Test", () => {
  test("Application 컴포넌트를 올바르게 렌더링한다.", () => {
    render(<Application />);
    const titleEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(titleEl).toBeInTheDocument();

    const sectionTitleEl = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionTitleEl).toBeInTheDocument();

    const nameEl = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameEl).toBeInTheDocument();

    const bioEl = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEl).toBeInTheDocument();

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const termsEl = screen.getByRole("checkbox");
    expect(termsEl).toBeInTheDocument();

    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
