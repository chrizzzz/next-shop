import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Article({
  id,
  title,
  description,
  image,
  rating,
  category,
  price,
}) {
  const router = useRouter();
  return (
    <div className={`flex flex-wrap gap-44 justify-center items-center  m-44 `}>
      <div className="">
        <Image src={image} alt={title} width={600} height={600} />
      </div>
      <div className="max-w-2xl">
        <h1 className="text-3xl">{title}</h1>
        <p>
          {rating.rate} ({rating.count})
        </p>
        <p className="bg-yellow-600 rounded text-white px-2 inline-block mt-4">
          {category}
        </p>
        <p className="mt-8">{description}</p>
        <p className="text-yellow-600 text-2xl mt-8"> {price}€</p>
        <button className="bg-yellow-600 rounded text-white p-2 inline-block mt-8">
          Buy now for {price}€
        </button>

        <button
          onClick={() => router.back()}
          className=" rounded text-gray-400 p-2 inline-block mt-8 ml-3 underline"
        >
          ➡ back
        </button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://fakestoreapi.com/products?limit=2");
  const products = await response.json();

  const paths = products.map((products) => ({
    params: { id: `${products.id}` },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params, locale }) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const article = await response.json();

  return {
    props: {
      ...article,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
