import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CategoryCard from "../components/categoryCard/categoryCard";

export default function Home({ categories }) {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-center items-center flex-wrap mt-12 flex-col">
      <div className=" text-white bg-yellow-500 rounded p-5  max-w-screen-xl w-full">
        <h1 className="text-5xl">Fake-Shop</h1>
        <p>{t("index.warning")}</p>
      </div>
      <h2 className=" max-w-screen-xl w-full border-b border-gray-200 text-gray-400 text-xs mt-20">
        {t("index.categoryHeadline")}
      </h2>
      <ul className="flex gap-4 max-w-screen-xl w-full mt-8">
        {categories.map((category) => (
          <li key={category.name}>
            <CategoryCard
              link={`/articles/category/${category.id}`}
              name={category.name}
              image={category.image}
            ></CategoryCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  let response = await axios.get(
    `http://localhost:3000/api/categories?lang=${locale}`
  );

  return {
    props: {
      categories: response.data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
