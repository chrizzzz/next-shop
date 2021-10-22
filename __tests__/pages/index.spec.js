import { render } from "@testing-library/react";
import Home, {
  getStaticProps,
  translationEnglish,
} from "../../pages/index.page";
import CategoryCard from "../../components/categoryCard/categoryCard";
import axios from "axios";

jest.mock("axios");
jest.mock("../../components/categoryCard/categoryCard", () =>
  jest.fn(() => null)
);

jest.mock("react-i18next", () => ({
  useTranslation: (namespace) => ({
    t: jest.fn((key) => `${namespace}.${key}`),
  }),
}));

describe("Home page", () => {
  it("should render a warning that shop is not a real shop ", () => {
    const { getAllByRole, getByText } = render(<Home categories={[]}></Home>);

    expect(getAllByRole("heading")[0]).toHaveTextContent("Fake-Shop");
    expect(getByText("common.index.warning")).toBeInTheDocument();
  });

  it("should render category subheadline ", () => {
    const { getAllByRole, getByText } = render(<Home categories={[]}></Home>);

    expect(getAllByRole("heading")[1]).toHaveTextContent(
      "index.categoryHeadline"
    );
  });

  it("should render 2 category cards, when backend returns with 2 category cards", () => {
    const category = [
      {
        id: 1,
        name: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 2,
        name: "jewelery",
        image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      },
    ];

    render(<Home categories={category}></Home>);

    expect(CategoryCard).toHaveBeenCalledTimes(2);
    expect(CategoryCard.mock.calls[0][0]).toEqual({
      link: "/articles/category/1",
      name: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    });
    expect(CategoryCard.mock.calls[1][0]).toEqual({
      link: "/articles/category/2",
      name: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    });
  });
});

describe("getStaticProps", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    axios.get.mockResolvedValue({ data: [{ id: 1 }] });
  });

  it("should handover translated categories as prop to component", async () => {
    const result = await getStaticProps({ locale: "en" });
    expect(result.props.categories).toEqual(translationEnglish);
  });
});
