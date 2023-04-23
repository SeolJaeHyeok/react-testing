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

    const spanElByTitle = screen.getByTitle("milkboy2564");
    expect(spanElByTitle).toBeInTheDocument();

    const divByTestId = screen.getByTestId("testId");
    expect(divByTestId).toBeInTheDocument();

    const paragraphEl = screen.getByText((content) => content.includes('test'));
    expect(paragraphEl).toBeInTheDocument();

    const nameEl = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameEl).toBeInTheDocument();

    const nameElByLabel = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElByLabel).toBeInTheDocument();

    const nameElByPlaceholder = screen.getByPlaceholderText(
      "Write your correct name"
    );
    expect(nameElByPlaceholder).toBeInTheDocument();

    const nameElByDisplayValue = screen.getByDisplayValue("milkboy2564");
    expect(nameElByDisplayValue).toBeInTheDocument();

    const nameElByAlt = screen.getByAltText("name");
    expect(nameElByAlt).toBeInTheDocument();

    const bioEl = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioEl).toBeInTheDocument();

    const jobLocationEl = screen.getByRole("combobox");
    expect(jobLocationEl).toBeInTheDocument();

    const termsEl = screen.getByRole("checkbox");
    expect(termsEl).toBeInTheDocument();

    const termsElByLabel = screen.getByLabelText("Agree");
    expect(termsElByLabel).toBeInTheDocument();

    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
