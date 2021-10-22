import { render } from "@testing-library/react";
import Logo from "../../components/logo/logo";

// eslint-disable-next-line
jest.mock("next/image", () => (props) => {
  return <img {...props}></img>;
});

describe("logo", () => {
  it("should render fake shop logo", () => {
    const { getByAltText } = render(<Logo></Logo>);
    expect(getByAltText("fake shop logo")).toHaveAttribute("src", "/logo.svg");
  });
  it("should navigate to start page when user click on fake shop logo", () => {
    const { getByRole } = render(<Logo></Logo>);
    expect(getByRole("link")).toHaveAttribute("href", "/");
  });
});
