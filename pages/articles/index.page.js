import ArticleList from "../../components/articleList/articleList";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useState } from "react";
import axios from "axios";

export default function Articles({ articles }) {
  const [currentItemsCount, updateCurrentItemCount] = useState(4);
  const [articlesToDisplay, setArticlesToDisplay] = useState(articles);

  const loadContent = () => {
    axios
      .get(`/api/products?limit=${currentItemsCount + 4}`)
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

export async function getStaticProps({ locale }) {
  const response = await axios.get("https://fakestoreapi.com/products?limit=4");

  const articles = response.data;

  return {
    props: { articles, ...(await serverSideTranslations(locale, ["common"])) },
  };
}
