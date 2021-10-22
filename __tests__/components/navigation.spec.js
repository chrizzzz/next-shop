import { render } from "@testing-library/react";
import Navigation from "../../components/navigation/navigation";

jest.mock("react-i18next", () => ({
  useTranslation: (namespace) => ({
    t: jest.fn((key) => `${namespace}.${key}`),
  }),
}));

describe("navigation", () => {
  it("should render link to article list page", () => {
    const { getAllByRole } = render(<Navigation></Navigation>);
    const articlesLink = getAllByRole("link")[0];

    expect(articlesLink).toHaveAttribute("href", "/articles");
    expect(articlesLink).toHaveTextContent(
      "common.header.navigation.productLink"
    );
  });
});
