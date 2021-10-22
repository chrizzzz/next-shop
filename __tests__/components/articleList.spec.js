import { render } from "@testing-library/react";
import ArticleList from "../../components/articleList/articleList";

// eslint-disable-next-line
jest.mock("next/image", () => (props) => {
  return <img {...props}></img>;
});

describe("articleList", () => {
  it("should render 3 articles, when articles has 3 articles", () => {
    const articles = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const { getAllByRole } = render(
      <ArticleList articles={articles}></ArticleList>
    );
    expect(getAllByRole("link")).toHaveLength(3);
  });

  it("should render for each article the image, price an title", () => {
    const articles = [
      { id: 1, image: "/artile.jpg", title: "new Article", price: 33 },
    ];
    const { getByAltText, getByRole, getByText } = render(
      <ArticleList articles={articles}></ArticleList>
    );
    expect(getByAltText("new Article")).toHaveAttribute("src", "/artile.jpg");
    expect(getByRole("heading")).toHaveTextContent("new Article");
    expect(getByText("33 €")).toBeInTheDocument();
  });

  it("should navigate to product detail page, when user click on product image", () => {
    const articles = [
      { id: 1, image: "/artile.jpg", title: "new Article", price: 33 },
    ];
    const { getByRole } = render(
      <ArticleList articles={articles}></ArticleList>
    );
    expect(getByRole("link")).toHaveAttribute("href", "/articles/1");
  });
});
