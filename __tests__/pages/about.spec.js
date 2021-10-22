import { render } from "@testing-library/react";
import About from "../../pages/about.page";

jest.mock("react-i18next", () => ({
  useTranslation: (namespace) => ({
    t: jest.fn((key) => `${namespace}.${key}`),
  }),
}));

describe("About page", () => {
  it("should render About headline ", () => {
    const { getByRole } = render(<About></About>);
    expect(getByRole("heading")).toHaveTextContent("common.about.heading");
  });

  it("should render warning that shop is not a real shop ", () => {
    const { getByText } = render(<About></About>);
    expect(getByText("common.about.content")).toBeInTheDocument();
  });
});
