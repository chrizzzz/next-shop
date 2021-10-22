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
  const response = await fetch("http://localhost:3000/api/categories?lang=en");
  const categories = await response.json();

  const paths = categories.map((category) => ({
    params: { id: `${category.name}` },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `http://localhost:3000/api/products?category=${params.id}&limit=4`
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
