import ArticleList from "../../../components/articleList/articleList";

import { useState } from "react";
import axios from "axios";

export default function Articles({ articles, category }) {
  const [currentItemsCount, updateCurrentItemCount] = useState(4);
  const [articlesToDisplay, setArticlesToDisplay] = useState(articles);

  const loadContent = () => {
    axios
      .get(
        `http://localhost:3000/api/products?category=${category}&limit=${
          currentItemsCount + 4
        }`
      )
      .then((response) => {
        updateCurrentItemCount(currentItemsCount + 4);
        setArticlesToDisplay(response.data);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <ArticleList articles={articlesToDisplay}></ArticleList>
        <button
          className="inline-block rounded-full text-white bg-gray-300 hover:bg-gray-400"
          onClick={() => loadContent()}
        >
          ↓
        </button>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = translationEnglish.map((category) => ({
    params: { id: `${category.name}` },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${params.id}?limit=4`
  );

  const articles = response.data;

  if (!articles) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { articles, category: params.id },
  };
}

export const translationEnglish = [
  {
    id: "men's clothing",
    name: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    id: "jewelery",
    name: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
  {
    id: "electronics",
    name: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: "women's clothing",
    name: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
  },
];
