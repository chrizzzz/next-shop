import { render } from "@testing-library/react";
import CategoryCard from "../../components/categoryCard/categoryCard";

// eslint-disable-next-line
jest.mock("next/image", () => (props) => {
  return <img {...props}></img>;
});

describe("category card", () => {
  it("should render image of category, with title in the middle", () => {
    const { getByRole, getByAltText } = render(
      <CategoryCard
        name="new category"
        image="test.jpg"
        link="/test"
      ></CategoryCard>
    );

    expect(getByRole("heading")).toHaveTextContent("new category");
    expect(getByAltText("new category")).toHaveAttribute("src", "test.jpg");
  });

  it("should navigate to category page, when user clicks on category", () => {
    const { getByRole } = render(
      <CategoryCard
        name="new category"
        image="test.jpg"
        link="/test"
      ></CategoryCard>
    );

    expect(getByRole("link")).toHaveAttribute("href", "/test");
  });
});
