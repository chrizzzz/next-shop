import { render } from "@testing-library/react";
import Footer from "./footer";

jest.mock("react-i18next", () => ({
  useTranslation: (namespace) => ({
    t: jest.fn((key) => `${namespace}.${key}`),
  }),
}));

describe("footer", () => {
  it("should show link to about page", () => {
    const { getAllByRole } = render(<Footer></Footer>);

    const aboutLink = getAllByRole("link")[0];
    expect(aboutLink).toHaveAttribute("href", "/about");
    expect(aboutLink).toHaveTextContent("common.footer.about");
  });

  it("should show link to imprint page", () => {
    const { getAllByRole } = render(<Footer></Footer>);

    const aboutLink = getAllByRole("link")[1];
    expect(aboutLink).toHaveAttribute("href", "/imprint");
    expect(aboutLink).toHaveTextContent("common.footer.imprint");
  });

  it("should show link to contacts page", () => {
    const { getAllByRole } = render(<Footer></Footer>);

    const aboutLink = getAllByRole("link")[2];
    expect(aboutLink).toHaveAttribute("href", "/contacts");
    expect(aboutLink).toHaveTextContent("common.footer.contacts");
  });

  it("should show link to press page", () => {
    const { getAllByRole } = render(<Footer></Footer>);

    const aboutLink = getAllByRole("link")[3];
    expect(aboutLink).toHaveAttribute("href", "/press");
    expect(aboutLink).toHaveTextContent("common.footer.press");
  });

  it("should show link to career page", () => {
    const { getAllByRole } = render(<Footer></Footer>);

    const aboutLink = getAllByRole("link")[4];
    expect(aboutLink).toHaveAttribute("href", "/career");
    expect(aboutLink).toHaveTextContent("common.footer.career");
  });
});
